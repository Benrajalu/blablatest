import React from 'react';

import styles from './EmptyScreen.module.scss';


export default function Error({error}: {error: Error}) {
  return (
    <article className={styles.empty}>
      <h2 className={styles.title}>Oups, something is wrong</h2>
      <p className={styles.copy}>Please retry!</p>
      <p className={styles.copySmall}>{error.message}</p>
    </article>
  )
}