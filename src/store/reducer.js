import {
  fromJS,
} from 'immutable';

import {
  ACTION_TYPES,
} from 'Actions/authentication';

const initialState = fromJS({
  currentUser: null,
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.UNSUCCESSFUL_LOGIN_ATTEMPT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default app;
