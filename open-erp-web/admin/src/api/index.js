import BaseApi from "./base";
import login from "./login";

export default {
  area: BaseApi('area'),
  warehouse: BaseApi('warehouse'),
  user: BaseApi('users'),
  processCata: BaseApi('processCata'),
  process: BaseApi('process'),
  customer: BaseApi('customer'),
  login: login
}