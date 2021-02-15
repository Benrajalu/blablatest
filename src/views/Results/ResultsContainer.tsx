import React, { useState, useEffect } from 'react';
import * as RemoteData from '@devexperts/remote-data-ts';
import { pipe } from 'fp-ts/function';

import * as Search from '../../domain/search';
import { fetchTrips } from '../../application/service';

import Loading from './EmtpyScreens/Loading';
import Error from './EmtpyScreens/Error';
import NotSearching from './EmtpyScreens/NotSearching';
import NoResults from './EmtpyScreens/NoResults';
import TripsList from './TripsList/TripsList';

export default function ResultsContainer() {
  const [results, setResults] = useState<RemoteData.RemoteData<Error, Search.TripsQueryPayload>>(RemoteData.initial);

  useEffect(() => {
    setResults(RemoteData.pending);

    fetchTrips()
      .then((payload: Search.TripsQueryPayload) => setResults(RemoteData.success(payload)))

  }, [setResults]);

  return (
    <>
      {
        pipe(
          results,
          RemoteData.fold(
            () => <NotSearching />,
            () => <Loading />,
            (error) => <Error error={error} />,
            (payload) => (
              <>
                { Search.hasNoResults(payload) && <NoResults /> }
                { !Search.hasNoResults(payload) && (
                  <TripsList
                    trips={Search.trips(payload)}
                    hasNextPage={Search.hasNextPage(payload)}
                  />
                )}
              </>
            ),
          )
        )
      }
    </>
  )
}