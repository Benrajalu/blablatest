import React, { useState } from 'react';
import * as ArrayFP from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';
import * as Search from '../../../domain/search';
import { fetchTrips } from '../../../application/service';
import TripResult from '../TripResult/TripResult';
import Loader from '../Loader/Loader';

import styles from './TripsList.module.scss';

type TripsListTypes = {
  trips: Search.Trips;
  hasNextPage?: string;
}

export default function TripsList(props: TripsListTypes) {
  const [collectedTrips, setTrips] = useState(props.trips);
  const [showLoadMore, setLoadMore] = useState(!!props.hasNextPage);
  const [currentCursor, setCursor] = useState(props.hasNextPage);
  const [isLoading, setIsLoading] = useState(false);
  
  function handleClick() {
    setIsLoading(true);

    fetchTrips(currentCursor)
      .then(result => {
        setLoadMore(!!result.next_cursor);
        setCursor(result.next_cursor);
        setTrips([...collectedTrips, ...result.trips]);
        setIsLoading(false);
      })
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Results</p>
      
      <h1 className={styles.subtitle}>
        Available trips from <strong>Paris</strong> to <strong>Lyon</strong>
      </h1>

      <ul className={styles.listing}>
        {
          pipe(
            collectedTrips,
            ArrayFP.mapWithIndex(( index:number, trip: Search.Trip ) => (
              <li key={`${trip.distance_in_meters}-${index}`}>
                <TripResult trip={trip} />
              </li>
            ))
          )
        }
         {showLoadMore && !isLoading && (
          <li>
            <button 
              type="button" 
              onClick={handleClick}
              className={styles.loadMore}
            >
              Load more
            </button>
          </li>
        )}

        {isLoading && <li><Loader /></li>}
      </ul>
    </div>
  )
}