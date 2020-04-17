import axios from './HttpRequest';

export const getList = (params = {}) => axios({
  url: 'department/',
  params
})

export const getDataById = (id = 0) => axios.get(`department/${id}`)

export const insert = (data) => axios.post('department/', data)
