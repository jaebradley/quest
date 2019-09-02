import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  MuiThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';

import {
  Router,
  Route,
  Switch,
} from 'react-router';
import {
  ApolloProvider,
} from 'react-apollo';

import history from 'Src/history';
import theme from 'Src/theme';
import store from 'Src/store';
import start from 'Sagas/start';
import client from 'Src/client';

import Home from './Home';
import Login from './Login';

start();

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <Router history={history}>
            <Switch>
              <Route
                exact
                path="/"
                component={Home}
              />
              <Route
                exact
                path="/login"
                component={Login}
              />
            </Switch>
          </Router>
        </ApolloProvider>
      </MuiThemeProvider>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
