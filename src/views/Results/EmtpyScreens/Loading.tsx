import React from 'react';

import Loader from '../Loader/Loader';

import styles from './EmptyScreen.module.scss';


export default function Loading() {
  return (
    <article className={styles.empty}>
      <Loader />
      <p className={styles.title}>Loading your results...</p>
    </article>
  )
}