// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export function App() {
  useEffect(() => {
    axios('/api/books/test');
  }, []);

  return <></>;
}

export default App;
