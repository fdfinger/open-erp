import wxApi from '../../api/wx'
const wx = require('weixin-js-sdk')

const state = {
  ready: false
}

const mutations = {}

const actions = {
  async ready({state}){
    const data = await wxApi.getjssdk({ url: encodeURIComponent(window.location.href.split("#")[0]) })
    wx.config({
      ...data,
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      jsApiList: ['checkJsApi','chooseImage', 'uploadImage'] // 必填，需要使用的JS接口列表
    });
    wx.ready(function(){
      state.ready = true
    })
    wx.error(function(res){
      state.ready = false
      window.console.log(res)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
