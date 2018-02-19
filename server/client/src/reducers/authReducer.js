import { USER_STATUS } from '../actions/types';

const defaultState = {
  isLoggedIn: null
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case USER_STATUS:
      return { isLoggedIn: payload || false }
    default: 
      return state;
  }
};