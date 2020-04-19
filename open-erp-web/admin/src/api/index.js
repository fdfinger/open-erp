import BaseApi from "./base";
import login from "./login";

export default {
  area: new BaseApi('area'),
  warehouse: new BaseApi('warehouse'),
  user: new BaseApi('users'),
  login: login
}