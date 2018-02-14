import axios from 'axios';

import { FETCH_USER } from './types';

export default async () => {
  const user = await axios.get('/api/current_user');
};