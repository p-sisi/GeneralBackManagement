// 封装请求的文件
import axios from "axios";

const http = axios.create({
    //通用的请求地址前缀,比如http://baidu.com
    baseURL: '/api',
    //延迟，如果发送的请求，超过这个时间没有受到后端的回应，那么就会停止请求
    timeout: 10000
})

// 添加请求拦截器
http.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function(response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function(error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default http