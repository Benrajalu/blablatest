import React from 'react';
import { pipe } from 'fp-ts/function';
import * as NonEmptyArrayFP from 'fp-ts/NonEmptyArray';
import * as OptionFP from 'fp-ts/Option';
import * as Search from '../../../domain/search';


export default function TripResult({ trip }: { trip:Search.Trip }) {
  return (
    <article>
      <p>You'll reach you destination in {trip.duration_in_seconds / 60 } minutes&nbsp;
          <span>({trip.distance_in_meters / 1000}km)</span>
      </p>
      <p>It would cost you {trip.price.amount}{trip.price.currency}</p>

      {
        pipe(
          trip,
          Search.vehicle,
          OptionFP.fold(
            () => null,
            (vehicle) => <p>You would be riding a sweet {vehicle.make} {vehicle.model}</p>,
          )
        )
      }

      {
        pipe(
          trip,
          Search.waypoints,
          NonEmptyArrayFP.fromArray,
          OptionFP.fold(
            () => <p>This is a direct trip</p>,
            (waypoints) => <p>This trip has {waypoints.length} waypoints</p>,
          )
        )
      }

      <a href={trip.link} target="_blank" rel="noreferrer">Interested? Check the details on Blablacar!</a>
    </article>
  )  
}