import axios, { Method } from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//interceptors
instance.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {};
    // if (user.token) {
    //   config.headers['Authorization'] = `Bearer ${user.token}`;
    // }
    return config;
  },
  (error) => {
    console.log('network', error);
  },
);

instance.interceptors.response.use(
  (resp) => {
    return new Promise((resolve, reject) => {
      const status = resp.status || 0;
      const { code } = resp.data;
      if (status === 403 || (code && code === 403)) {
        // Toast.error('请登录');
        location.href = '/login';
        reject(resp);
      }
      resolve(resp);
    });
  },
  (error) => {
    return new Promise((resolve, reject) => {
      const status = error.response.status || 0;
      if (status === 403) {
        // Toast.error('请登录');
        location.href = '/login';
      }
      reject(error);
    });
  },
);

interface RequestConfig {
  method: Method;
  url: string;
  data?: { [key: string]: any };
  params?: { [key: string]: any };
  headers?: { [key: string]: string };
}

const useRequest = <T>(config: RequestConfig) => {
  return new Promise<T>((resolve, reject) => {
    instance({
      method: config.method,
      url: config.url,
      data: config.data,
      params: config.params,
      headers: config.headers,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export { useRequest };
export type { RequestConfig };
export default instance;
