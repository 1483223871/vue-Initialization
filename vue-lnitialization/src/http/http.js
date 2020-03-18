import axios from 'axios'
axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.baseURL = 'http://localhost:3001'; //配置接口地址
axios.defaults.withCredentials = true;
// 请求拦截
axios.interceptors.request.use(
    config => {
        // 请求头添加token
        if (localStorage.getItem('Authorization')) {
            config.headers.token = localStorage.getItem('Authorization');
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    })
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    //对响应数据做些事
    if (!res.data.success) {
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
    if (error.response) {
        switch (error.response.status) {
          case 401:
            // 状态码返回时 统一处理异常状态  比如 加提示语 退出登录等操作
            break
          case 490:
            break
        }
      }
    return Promise.reject(error);
});
//返回一个Promise(发送post请求)
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
////返回一个Promise(发送get请求)
export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: param
            })
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export default {
    post,
    get,
}