import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router,
  Route,
  Switch,
} from 'react-router';

import history from 'Src/history';

import Login from './Login';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/login"
          component={Login}
        />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
