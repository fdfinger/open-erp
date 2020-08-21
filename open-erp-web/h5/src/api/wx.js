import axios from '../utils/HttpRequest.js'

export default {
  // 获取jssdk的配置信息
  getjssdk(params){
    return axios.get('/getjssdk', { params })
  }
}