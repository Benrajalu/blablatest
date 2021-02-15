import React from 'react';

import styles from './EmptyScreen.module.scss';


export default function NoResults() {
  return (
    <article className={styles.empty}>
      <h2>Sorry, we have not found any trip for with the requested options...</h2>
    </article>
  )
}