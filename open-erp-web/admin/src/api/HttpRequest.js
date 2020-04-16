import axios from "axios";
import { message } from "antd";

const isDev = process.env.NODE_ENV === "development";

const instance = axios.create({
  baseURL: isDev ? "http://localhost:3000" : "http://www.baidu.com",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    const { data } = response
    return data;
  },
  (err) => {
    message.error(err.response.data);
    return Promise.reject(err);
  }
);

export default instance;
