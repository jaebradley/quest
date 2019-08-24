import {
  takeLatest,
} from 'redux-saga/effects';

import {
  ACTION_TYPES,
} from 'Actions/authentication';
import handleSuccessfulLoginAttempt from './authentication/handleSuccessfulLoginAttempt';
import handleSettingAuthenticationToken from './authentication/handleSettingAuthenticationToken';

function* watchSuccessfulLoginAttempts() {
  yield takeLatest(ACTION_TYPES.SUCCESSFUL_LOGIN_ATTEMPT, handleSuccessfulLoginAttempt);
}

function* watchSetAccessToken() {
  yield takeLatest(ACTION_TYPES.SET_TOKEN, handleSettingAuthenticationToken);
}

export {
  watchSuccessfulLoginAttempts,
  watchSetAccessToken,
};
