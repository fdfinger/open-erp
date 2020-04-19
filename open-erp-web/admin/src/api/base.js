import axios from "./HttpRequest";

function BaseApi(moudleUrl) {
  var o = {};
  o.moudleUrl = moudleUrl;
  o.list = function (params) {
    return axios({
      method: "GET",
      url: `${moudleUrl}/`,
      params,
    });
  };
  o.getById = function (id) {
    return axios.get(`${moudleUrl}/${id}`);
  };
  o.insert = function (data) {
    return axios({
      url: `${moudleUrl}/`,
      method: "POST",
      data,
    });
  };
  o.update = function (id, data) {
    return axios({
      url: `${moudleUrl}/${id}`,
      method: "PUT",
      data,
    });
  };
  o.delete = function (id) {
    return axios({
      url: `${moudleUrl}/${id}`,
      method: "DELETE",
    });
  };
  return o;
}

export default BaseApi;
