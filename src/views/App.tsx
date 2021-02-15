import React, { useEffect } from 'react';
import logo from './images/logo.svg';

import styles from './App.module.scss';

import { fetchTrips } from '../application/service';

function App() {
  useEffect(() => {
    fetchTrips()
      .then(result => console.log(result));
  }, []);
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <img src={logo} className={styles.Applogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.Applink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
