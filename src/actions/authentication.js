const ACTION_TYPES = {
  SUCCESSFUL_LOGIN_ATTEMPT: 'SUCCESSFUL_LOGIN_ATTEMPT',
  UNSUCCESSFUL_LOGIN_ATTEMPT: 'UNSUCCESSFUL_LOGIN_ATTEMPT',
  SET_TOKEN: 'SET_TOKEN',
  REMOVE_TOKEN: 'REMOVE_TOKEN',
};

function successfulLoginAttempt(data) {
  return {
    type: ACTION_TYPES.SUCCESSFUL_LOGIN_ATTEMPT,
    payload: data,
  };
}

function unsuccessfulLoginAttempt(data) {
  return {
    type: ACTION_TYPES.UNSUCCESSFUL_LOGIN_ATTEMPT,
    payload: data,
  };
}

function setToken(token) {
  return {
    type: ACTION_TYPES.SET_TOKEN,
    payload: token,
  };
}

function removeToken() {
  return {
    type: ACTION_TYPES.REMOVE_TOKEN,
  };
}

export {
  ACTION_TYPES,
  setToken,
  successfulLoginAttempt,
  removeToken,
  unsuccessfulLoginAttempt,
};
