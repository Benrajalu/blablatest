import { TripsQueryPayload } from "../domain/search";

type destinationCoordinates = {
  lat: number;
  lng: number;
}

export async function fetchTrips(cursor?:string):Promise<TripsQueryPayload> {
  const apiKey = 'YzbiA8L6DcqxTvSna1lOFQQU66FosDVs';
  const fromCoordinates:destinationCoordinates = { lat: 48.8566, lng: 2.3522 };
  const toCoordinates :destinationCoordinates = { lat: 45.764043, lng: 4.835659 };
  //const date = new Date().toISOString();
  const date = '2021-02-16T06:00:00';
  const withCursor = cursor ? `&from_cursor=${cursor}` : '';

  const APIRoute = `https://public-api.blablacar.com/api/v3/trips?key=${apiKey}&from_coordinate=${fromCoordinates.lat}%2C${fromCoordinates.lng}&from_country=FR&to_coordinate=${toCoordinates.lat}%2C${toCoordinates.lng}&to_country=GB&locale=fr-FR&currency=EUR&start_date_local=${date}${withCursor}`

  return fetch(APIRoute)
    .then(result => result.json())
}