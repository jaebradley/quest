import {
  call,
  put,
} from 'redux-saga/effects';

import { google as googleAuthentication } from 'Client/authentication';
import history from 'Src/history';
import {
  setToken,
} from 'Actions/authentication';

export default function* handleSuccessfulLoginAttempt({ payload: data }) {
  const accessToken = data.tokenObj.access_token;
  const response = yield call(googleAuthentication, accessToken);
  const authToken = response.headers['x-quest-auth-token'];
  yield put(setToken(authToken));
  history.push('/');
}
