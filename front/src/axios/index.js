/*
 * @Author: zongbao.yao
 * @Date: 2021-12-28 10:22:48
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2021-12-28 12:26:25
 * @Description: axios封装
 */

import axios from "axios";
// import sha256 from 'sha256'
// component
import { Toast } from "vant";
import { ElMessage } from "element-plus";
// utils
import { isApp } from "@/utils/index.ts";
// class
class HttpRequest {
  // 入口：
  request(config) {
    // 创建axios实例
    const http = axios.create({
      baseURL: "",
      method: "post", // 默认是 post
      timeout: 100000, // 请求超时时间
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });

    // 给axios添加拦截
    this.interceptor(http);
    // 执行\抛出结果
    return http(config);
  }

  // 接口拦截：
  interceptor(http) {
    // request拦截
    http.interceptors.request.use((config) => {
      // 1.携带必要参数（根据场景自定义）
      // ps:此处必要参数userId和corpId
      const defaultParams = {
        userId: window.localStorage.getItem("userId") || "1",
        corpId: window.localStorage.getItem("corpId") || "1",
      };
      config.data = { ...config.data, ...defaultParams };
      // 2.数据传递
      // IF.文件上传
      // ELSE.普通请求
      if (config.headers["Content-Type"] === "multipart/form-data") {
        // 文件上传
        const formData = new FormData();
        for (const key in config.data) {
          formData.append(key, config.data[key]);
        }
        config.data = formData;
      } else {
        // 普通请求（参数格式化）
        config.data = this.formatParams(config.data);
      }
      // 3.token加密处理（token具体由哪里传递与后端商定）
      // ps:此处将token进行sha256加密,带入请求头sign字段传递
      const token = window.localStorage.getItem("token");
      config.headers.sign = this.createToken(token);
      // 4.接口同步,按照request请求时间顺序返回response
      // 防止：同一个接口频繁请求而导致的渲染错误问题
      // 原理：标记request请求队列、且返回最新的一次response
      // 使用：在请求参数data中添加isSync接口同步参数
      if (config.data && config.data.isSync) {
        /*
         *生成一个时间戳，绑定到url，一个存到到全局变量，
         *另一个添加到请求配置中并随response返回
         *然后拿response返回的时间戳与全局变量中的去比对，如果不一致，则添加一个为按请求顺序返回的标记
         */
        const date = Date.now();
        window.isSync = window.isSync || {};
        window.isSync[config.url] = config.isSync[config.url] = date;
      }
      // config
      return config;
    }),
      (error) => {
        // 对请求错误做些什么
        console.log("请求拦截错误", error);
        //
        return Promise.reject(error);
      };
    // response拦截
    http.interceptors.response.use((response) => {
      // 1.对响应数据做点什么
      if (!response) return;
      // 2.获取响应数据(根据场景配置)
      // data: 由服务器提供的响应
      // config: 是为请求提供的配置信息
      const { data, config, msg } = response;
      // 3.接口同步,按照request请求时间顺序返回response
      const requestUrl = config.url.replace(config.baseURL, "");
      if (
        config.isSync &&
        config.isSync[requestUrl] &&
        config.isSync[requestUrl] !== window.isSync[requestUrl]
      ) {
        // 未按请求顺序返回，按异常处理
        return Promise.reject();
      }
      // 4.response.data处理
      // 模拟后端返回格式：{ result: {}, success: true, code: 100012 }
      // result: 接口请求成功得到的数据
      // success:接口成功/失败状态
      // code:   接口状态码
      // msg:    接口描述
      if (data.result && Object.keys(data.result).length) {
        return data.result;
      } else if (data.success === false) {
        // 接口请求失败：
        // IF.登录过期
        // 模拟失败code码
        if (
          [100012, 100013].includes(data.code) &&
          process.env.NODE_ENV === "production"
        ) {
          // 请求失败清除token
          window.localStorage.setItem("token", "");
          // 跳转到登录页
          // router.replace({ path: '/login' })
        }
        msg || this.messageBox(data.msg);
        return Promise.reject(data);
      } else {
        return data;
      }
    }),
      (error) => {
        // 对响应错误做点什么
        console.log("返回接口拦截时拦截到错误", error);
        // 响应错误处理
        this.messageBox(error);
        return Promise.reject(error);
      };
  }

  // 格式化请求参数
  formatParams(data) {
    let bodyString = JSON.stringify(Object.assign(data));
    // 过滤特殊字符
    if (bodyString.length > 100) {
      bodyString = this.characterFilter(bodyString);
    }
    return bodyString;
  }

  // 过滤特殊字符
  characterFilter(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      const us = str.charCodeAt(i);
      if (!(us < 0x20 || us === 0x7f || us === 0x2028 || us === 0x2029)) {
        newStr += str.charAt(i);
      }
    }
    return newStr;
  }

  // 加密
  createToken(token = "") {
    // return sha256(token)
    return token;
  }

  // msg错误提示
  messageBox(message) {
    if (isApp()) {
      Toast.fail(message);
    } else {
      ElMessage({ type: "error", message });
    }
  }
}

export default function (config, isMock = false) {
  // 控制api前缀
  const prefix = "/api";
  // 拼接完整url【不带域名ip地址】
  config.url = prefix + config.url;
  // 开启mock
  if (process.env.NODE_ENV === "development" && isMock) {
    console.log("development api", isMock);
    config.url = `/mock${config.url}`;
  }
  return new HttpRequest().request(config);
}
