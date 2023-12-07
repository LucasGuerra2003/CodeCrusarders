import React from 'react';
import AppRoutes from './Routes/AppRoutes';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;

