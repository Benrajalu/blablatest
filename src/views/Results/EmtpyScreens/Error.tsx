import React from 'react';

import styles from './EmptyScreen.module.scss';


export default function Error({error}: {error: Error}) {
  return (
    <article className={styles.empty}>
      <h2>Oups, something is wrong</h2>
      <p>Please retry!</p>
      <p>{error.message}</p>
    </article>
  )
}