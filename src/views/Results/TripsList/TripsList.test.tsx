import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen, fireEvent, waitForElementToBeRemoved, queryByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import * as Search from '../../../domain/search';

import TripsList from './TripsList';

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

  const previousTrips: Search.Trips = [
    {
      distance_in_meters: 468574,
      duration_in_seconds: 18600,
      link: "https://www.blablacar.fr/trip?source=CARPOOLING&id=2134985446-paris-lyon",
      price: {amount: "32.00", currency: "EUR"},
      vehicle: {make: "PEUGEOT", model: "208"},
      waypoints: [
        {
          date_time: new Date(),
          place: {
            address: "234 Rue De Nantes, 75018 Paris, France",
            city: "Paris",
            country_code: "FR",
            latitude: 48.893509,
            longitude: 2.328883,
          }
        },
      ],
    }
  ];

  render(<TripsList trips={previousTrips} hasNextPage='nextpageHash' />);

  await waitFor(() => screen.getByText('Results'));

  fireEvent.click(screen.getByText('Load more'));

  await waitFor(() => screen.getByText('Loading...'));

  await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});
