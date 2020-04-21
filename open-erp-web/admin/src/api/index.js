import BaseApi from "./base";
import login from "./login";

export default {
  area: BaseApi('area'),
  warehouse: BaseApi('warehouse'),
  user: BaseApi('users'),
  login: login
}