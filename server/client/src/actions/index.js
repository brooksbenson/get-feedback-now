import axios from 'axios';
import { USER_STATUS } from './types';

export const fetchUserStatus = () => async dispatch => {
  const { data } = await axios.get('/api/current_user');
  dispatch({
    type: USER_STATUS,
    payload: data
  });
};

export const handleStripeToken = (token) => async dispatch => {
  const { data } = await axios.post('/api/stripe', token);
  dispatch({
    type: USER_STATUS,
    payload: data
  });
};