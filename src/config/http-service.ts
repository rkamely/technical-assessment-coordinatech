import axios from "axios";
import {BaseUrl} from "./constants.ts";


const HttpService = axios.create({
  baseURL: BaseUrl,
  headers: {
    Accept: "application/json",
    "content-type": "application/json; charset=utf-8",
  },
});


// HttpService.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// HttpService.interceptors.response.use(
//   (response) => {
//     if (!response || !response.data || response?.data?.Status === false) {
//       return Promise.reject(response);
//     }
//
//     return Promise.resolve(response);
//   },
//   (error) => {
//     // if (error.Status === false) {
//     //   store.dispatch(
//     //     handleToast({
//     //       status: true,
//     //       text: error.Message,
//     //     })
//     //   );
//     //   Sentry.captureException(error);
//     // } else if (error?.Status === true && Boolean(error?.Data)) {
//     //   Sentry.captureMessage(error.response.data);
//     // }
//     return Promise.reject(error);
//
//     //else if (
//     //   status === 403 &&
//     //   window.location.pathname !== "/vpn"
//     // ) {
//     //   window.location.assign("/vpn");
//     //   return;
//     // } else if (status === 500) {
//     //   const lastError = localStorage.getItem("500");
//     //   const t = new Date().getTime();
//     //   // const language = getCookieLanguages();
//     //   if (lastError) {
//     //     if (t - Number(lastError) > 60000) {
//     //       localStorage.setItem("500", t.toString());
//     //       // message.error("Error in network");
//     //     }
//     //   } else {
//     //     localStorage.setItem("500", t.toString());
//     //     // message.error(language === "fa" ? "خطا در شبکه" : "Error in network");
//     //   }
//     //   return Promise.reject(error);
//     // } else {
//     //   return Promise.reject(error);
//     // }
//
//     // return Promise.reject(error);
//   },
//   { synchronous: true }
// );

export default HttpService;
