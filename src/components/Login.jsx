import React, {
  useCallback,
} from 'react';
import {
  useDispatch,
} from 'react-redux';
import GoogleLogin from 'react-google-login';

import {
  successfulLoginAttempt,
  unsuccessfulLoginAttempt,
} from 'Actions/authentication';

function Login() {
  const dispatch = useDispatch();
  const handleSuccessfulAttempt = useCallback((data) => dispatch(successfulLoginAttempt(data)));
  const handleUnsuccessfulAttempt = useCallback((data) => dispatch(unsuccessfulLoginAttempt(data)));
  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      onSuccess={handleSuccessfulAttempt}
      onFailure={handleUnsuccessfulAttempt}
    />
  );
}

export default Login;
