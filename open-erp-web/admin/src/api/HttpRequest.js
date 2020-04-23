import axios from "axios";
import { message } from "antd";

const isDev = process.env.NODE_ENV === "development";

const instance = axios.create({
  baseURL: isDev ? "http://localhost:3000" : "http://localhost:3000",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    message.error('网络连接异常，请稍后重试');
    return {};
  }
);

instance.interceptors.response.use(
  (response) => {
    const { data } = response
    return data;
  },
  (err) => {
    message.error('网络连接异常，请稍后重试');
    return {};
  }
);

export default instance;
