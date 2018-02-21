import { USER_STATUS } from '../actions/types';

export default (state = null, { type, payload }) => {
  switch (type) {
    case USER_STATUS:
      return payload || false;
    default: 
      return state;
  }
};