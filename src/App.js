import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// imported components
import Login from './pages/Login/Login';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}
