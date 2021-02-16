import React from 'react';

import styles from './EmptyScreen.module.scss';


export default function NotSearching() {
  return (
    <article className={styles.empty}>
      <h2 className={styles.title}>Ready to go?</h2>
      <p className={styles.copy}>Please select your location and destination</p>
    </article>
  )
}