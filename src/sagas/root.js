import {
  all,
  fork,
} from 'redux-saga/effects';

import {
  watchSuccessfulLoginAttempts,
  watchSetAccessToken,
} from './watchers';

export default function* root() {
  yield all([
    fork(watchSuccessfulLoginAttempts),
    fork(watchSetAccessToken),
  ]);
}
