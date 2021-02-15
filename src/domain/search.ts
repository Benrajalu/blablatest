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

type Trip = {
  link: string;
  distance_in_meters: number;
  distance_in_seconds: number;
  price: { amount: string, currency: string; };
  vehicle: Vehicle;
  waypoints: Waypoint[];
}

export type Trips = Trip[];

