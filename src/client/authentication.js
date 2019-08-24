import {
  call,
} from 'redux-saga/effects';

import makeHTTPRequest from './makeHTTPRequest';

function* google(accessToken) {
  const response = yield call(
    makeHTTPRequest,
    {
      path: '/authentication/google',
      method: 'POST',
      body: {
        token: accessToken,
      },
    },
  );
  return response;
}

export {
  google,
};
