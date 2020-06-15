"use strict";

import Vue from 'vue';
import axios from "axios";
import { message } from 'ant-design-vue';
import router from './../router'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    baseURL: process.env.baseURL || process.env.VUE_APP_API_URL || "",
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
    function(response) {
      //验证token是否正确，否则清除session缓存，重新登录
      if(response.data.code ===40003 || response.data.code === 40001){
        message.warn(response.data.msg);
        router.push('/login')
      }
      return response.data;
    },
    function(error) {
      if(!error.response){
        window.console.error('ERR_CONNECTION_REFUSED：网络连接错误请检查接口服务器')
      }else {
        message.error(error.response.statusText+'['+error.response.data.message+']')
      }
      return Promise.reject(error);
    }
);


Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
