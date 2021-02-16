import React from 'react';

import styles from './EmptyScreen.module.scss';


export default function NoResults() {
  return (
    <article className={styles.empty} data-testid="no-results">
      <h2 className={styles.title}>Sorry, we have not found any trip for with the requested options...</h2>
    </article>
  )
}