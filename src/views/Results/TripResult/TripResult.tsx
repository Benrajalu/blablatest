import React from 'react';
import { pipe } from 'fp-ts/function';
import * as NonEmptyArrayFP from 'fp-ts/NonEmptyArray';
import * as OptionFP from 'fp-ts/Option';
import * as Search from '../../../domain/search';

import styles from './TripResult.module.scss';


export default function TripResult({ trip }: { trip:Search.Trip }) {
  return (
    <article className={styles.result}>
      <p>
        You'll reach you destination in <strong>{trip.duration_in_seconds / 60 } minutes</strong>&nbsp;
          <span className={styles.detail}>({trip.distance_in_meters / 1000}km)</span>
      </p>

      <p>It would cost you <strong>{trip.price.amount}{trip.price.currency}</strong></p>

      {
        pipe(
          trip,
          Search.vehicle,
          OptionFP.fold(
            () => null,
            (vehicle) => <p>You would be riding a sweet <strong>{vehicle.make} {vehicle.model}</strong></p>,
          )
        )
      }

      {
        pipe(
          trip,
          Search.waypoints,
          OptionFP.fold(
            () => null,
            (possibleWaypoints) => {
              return pipe(
                possibleWaypoints,
                NonEmptyArrayFP.fromArray,
                OptionFP.fold(
                  () => <p>This is a direct trip</p>,
                  (confirmedWaypoints) => <p>This trip has <strong>{confirmedWaypoints.length} waypoints</strong></p>,
                )
              )
            }
          ) 
        )
      }

      <a href={trip.link} target="_blank" rel="noreferrer" className={styles.link}>Interested? Check the details on Blablacar!</a>
    </article>
  )  
}