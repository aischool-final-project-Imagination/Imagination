import axios from 'axios';
import { PORT } from '../../../../../../packages/models/port';
const instance = axios.create({
  baseURL: `http://localhost:${PORT}`,
  headers: {
    accept: 'application/json',
  },
});

export default instance;
