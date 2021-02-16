import { pipe } from "fp-ts/lib/pipeable";
import * as OptionFP from 'fp-ts/Option';

type Vehicle = {
  make: string;
  model: string;
}

type Place = {
  address: string;
  city: string;
  country_code: string;
  latitude: number;
  longitude: number;
}

type Waypoint = {
  date_time: Date;
  place: Place;
}

export type Trip = {
  link: string;
  distance_in_meters: number;
  duration_in_seconds: number;
  price: { amount: string, currency: string; };
  vehicle?: Vehicle;
  waypoints?: Waypoint[];
}

export type Trips = Trip[];

export type Waypoints = Waypoint[];

export type TripsQueryPayload = {
  link: string;
  search_info: {
    count: number;
    full_trip_count: number;
  };
  trips: Trips;
  next_cursor?: string;
}

// Accessors 
// Enable easy refectoring while keeping the same public interface
export function trips(payload: TripsQueryPayload): Trips {
  return pipe(
    payload.trips,
  );
}

export function waypoints(trip: Trip): OptionFP.Option<Waypoints> {
  return pipe(
    trip.waypoints,
    OptionFP.fromNullable,
  );
}

export function vehicle(trip: Trip): OptionFP.Option<Vehicle> {
  return pipe(
    trip.vehicle,
    OptionFP.fromNullable,
  );
}

export function hasNoResults(payload: TripsQueryPayload) {
  return pipe(
    payload.search_info,
    (info) => info.count === 0,
  );
}

export function hasNextPage(payload: TripsQueryPayload) {
  return pipe(
    payload.next_cursor
  );
}