import React from 'react';

import styles from './App.module.scss';

import ResultsContainer from './Results/ResultsContainer';

function App() {
  return (
    <div className={styles.app}>
      <ResultsContainer />
    </div>
  );
}

export default App;
