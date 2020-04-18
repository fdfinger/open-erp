import axios from "./HttpRequest";

class BaseApi {
  constructor(moudleUrl) {
    this.moudleUrl = moudleUrl;
  }

  list (params) {
    return axios({
      url: `${this.moudleUrl}/`,
      params
    })
  }

  getById (id) {
    return axios.get(`${this.moudleUrl}/${id}`)
  }

  insert (data) {
    return axios({
      url: `${this.moudleUrl}/`,
      method: 'POST',
      data
    })
  }

  update (id, data) {
    return axios({
      url: `${this.moudleUrl}/${id}`,
      method: 'PUT',
      data
    })
  }

  delete (id) {
    return axios({
      url: `${this.moudleUrl}/${id}`,
      method: 'DELETE'
    })
  }
}

export default BaseApi
