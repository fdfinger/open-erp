import axios from "axios";

const isDev = process.env.NODE_ENV === "development";

const instance = axios.create({
  baseURL: isDev ? "/test" : "http://118.190.237.48:3000",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.error(err);
    return {};
  }
);

instance.interceptors.response.use(
  (response) => {
    const { data } = response
    return data;
  },
  (err) => {
    console.error(err);
    return {};
  }
);

export default instance;
