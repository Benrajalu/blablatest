import { Trips } from "../domain/search";

type destinationCoordinates = {
  lat: number;
  lng: number;
}

type payload = {
  link: string;
  search_info: {
    count: number;
    full_trip_count: number;
  };
  trips: Trips;
}

export async function fetchTrips():Promise<payload> {
  const apiKey = 'YzbiA8L6DcqxTvSna1lOFQQU66FosDVs';
  const fromCoordinates:destinationCoordinates = { lat: 48.8566, lng: 2.3522 };
  const toCoordinates :destinationCoordinates = { lat: 45.764043, lng: 4.835659 };
  const date = new Date().toISOString();

  const APIRoute = `https://public-api.blablacar.com/api/v3/trips?key=${apiKey}&from_coordinate=${fromCoordinates.lat}%2C${fromCoordinates.lng}&from_country=FR&to_coordinate=${toCoordinates.lat}%2C${toCoordinates.lng}&to_country=GB&locale=fr-FR&currency=EUR&start_date_local=${date}`

  return fetch(APIRoute)
    .then(result => result.json())
}
