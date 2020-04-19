import axios from './HttpRequest'

export default {
  login(data) {
    return axios({
      method: 'POST',
      url: 'login/',
      data
    })
  }
}