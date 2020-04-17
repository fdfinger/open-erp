import axios from './HttpRequest';

export const getList = () => axios.get('users/')