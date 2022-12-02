import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const requestInterceptor = (req: AxiosRequestConfig): AxiosRequestConfig => {
  // @todo: retrive `accessToken` from where it's stored and set it here
  // @ts-ignore
  req.headers.Authorization = `Bearer accessToken`;
  return req;
};

const responseInterceptor = (res: AxiosResponse): AxiosResponse => {
  return res.data;
};

const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

export const init = ({ apiBaseUrl, apiVersion }: any) => {
  axios.defaults.baseURL = `${apiBaseUrl}/${apiVersion}`;
  axios.interceptors.request.use(requestInterceptor, errorInterceptor);
  axios.interceptors.response.use(responseInterceptor, errorInterceptor);
};

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

export const resetAuthHeader = () => {
  // @ts-ignore
  axios.defaults.headers.Authorization = undefined;
};

export const create = axios.create;

export const all = (iterable: any) =>
  axios.all(iterable).then(axios.spread((...args) => args));

export const request = axios;

export const get = axios.get;

export const post = axios.post;

export const put = axios.put;

export const patch = axios.patch;

export const del = axios.delete;
