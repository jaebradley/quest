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

import history from 'Src/history';
import theme from 'Src/theme';
import store from 'Src/store';
import start from 'Sagas/start';

import Login from './Login';

start();

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/login"
              component={Login}
            />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
