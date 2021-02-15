import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ResultsContainer from './ResultsContainer';

const server = setupServer(
  rest.get('https://public-api.blablacar.com/api/v3/trips', (req, res, ctx) => {
    return res(ctx.json({ 
      link: "https://www.blablacar.fr/search?fc=48.8566,2.3522&tc=45.764043,4.835659&fn=Paris&tn=Lyon&db=2021-02-16&de=2021-02-16",
      search_info: {
        count: 1, 
        full_trip_count: 1,
      },
      trips: [{
        distance_in_meters: 468574,
        duration_in_seconds: 18600,
        link: "https://www.blablacar.fr/trip?source=CARPOOLING&id=2134985446-paris-lyon",
        price: {amount: "27.00", currency: "EUR"},
        vehicle: {make: "MINI", model: "COOPER"},
        waypoints: [
          {
            date_time: "2021-02-16T06:00:00",
            place: {
              address: "234 Rue Championnet, 75018 Paris, France",
              city: "Paris",
              country_code: "FR",
              latitude: 48.893509,
              longitude: 2.328883,
            }
          },
        ]
      }],
    }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Loads and displays list', async () => {

  render(<ResultsContainer />);

  await waitFor(() => screen.getByText('Results'));

  expect(screen.getByRole('heading')).toHaveTextContent('Available trips from Paris to Lyon');
  expect(screen.getByRole('list')).toHaveTextContent("You'll reach you destination in 310 minutes (468.574km)It would cost you 27.00EURYou would be riding a sweet MINI COOPERThis trip has 1 waypointsInterested? Check the details on Blablacar!");
});

test('Loads and displays emptyScreen if no trips', async () => {

  server.use(
    rest.get('https://public-api.blablacar.com/api/v3/trips', (req, res, ctx) => {
      return res(ctx.json({ 
        link: "https://www.blablacar.fr/search?fc=48.8566,2.3522&tc=45.764043,4.835659&fn=Paris&tn=Lyon&db=2021-02-16&de=2021-02-16",
        search_info: {
          count: 0, 
          full_trip_count: 0,
        },
      }))
    })
  )

  render(<ResultsContainer />);

  await waitFor(() => screen.getByTestId('no-results'));

  expect(screen.getByRole('heading')).toHaveTextContent('Sorry, we have not found any trip for with the requested options...');
});