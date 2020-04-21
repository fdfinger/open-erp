import axios from "./HttpRequest";

function BaseApi(moudleUrl) {
  var o = {};
  o.moudleUrl = moudleUrl;
  /**
   * 获取列表
   * @param {object} params 查询条件
   */
  o.list = function (params) {
    return axios({
      method: "GET",
      url: `${moudleUrl}/`,
      params,
    });
  };
  /**
   * 查询 findById
   * @param {number} id 明细Id
   */
  o.getById = function (id) {
    return axios.get(`${moudleUrl}/${id}`);
  };
  /**
   * 插入
   * @param {object} data 插入的数据
   */
  o.insert = function (data) {
    return axios({
      url: `${moudleUrl}/`,
      method: "POST",
      data,
    });
  };
  /**
   * 更新
   * @param {object} params 更新的数据
   */
  o.update = function (params) {
    const { id, ...data } = params
    return axios({
      url: `${moudleUrl}/${id}`,
      method: "PUT",
      data,
    });
  };
  /**
   * 删除
   * @param {number} id 待删除的Id
   */
  o.delete = function (id) {
    return axios({
      url: `${moudleUrl}/${id}`,
      method: "DELETE",
    });
  };
  return o;
}

export default BaseApi;
