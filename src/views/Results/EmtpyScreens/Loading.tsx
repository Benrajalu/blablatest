import React from 'react';

import styles from './EmptyScreen.module.scss';


export default function Loading() {
  return (
    <article className={styles.empty}>
      <div className={styles.loader} />
      <p>loading your results...</p>
    </article>
  )
}