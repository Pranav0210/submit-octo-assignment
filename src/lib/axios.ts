import Axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { API_URL } from "../config/index";

/**
 * Purpose to include authentication token if using JWT
 * @param config
 * @returns
 */
const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers = config.headers;
  return config;
};

/**
 * Purpose to format the incoming data from the API
 * @param response
 * @returns
 */
export const responseInterceptor = (response: AxiosResponse) => {
  if (response.headers["content-type"].startsWith("application/json")) {
    return response?.data;
  }
  return response;
};

// export const errorInterceptor = (error: any) => {
//   const messages: string[] | string = error.response.data.message || [
//     error?.message,
//   ];

//   const msg = typeof messages === "string" ? messages : messages[0];
//   if (msg.toLowerCase() === "unauthorized" && error.response.status === 401) {
//     if (error?.config?.url === "/auth/profile") {
//       return;
//     }
//     return Promise.reject(error);
//   }
//   return Promise.reject(error);
// };

export const axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(responseInterceptor);
