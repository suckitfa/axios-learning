// Axios配置项
// url基础
axios.defaults.baseURL = "http://test.com";

// 跨域请求的时候允许携带凭证
axios.defaults.withCredentials = true;

//设置请求头Post系列中，我们传递给服务器数据的格式
axios.defaults.headers['Content-Type'] = 'application/x-www-urlencoded';

// 请求拦截器 只对post请求有效果
// 基于请求主体传递给服务器的内容进行拦截
axios.defaults.transformRequest = function(data) {
    if (!data) return data;
    let str = ``;
    for (let key in data) {
        if (!data.hasOwnProperty(key)) break;
        str += `&${key}=${data[key]}`;
    }
    return str.substring(1);
};

// 设置响应拦截器
axios.interceptors.response.use(function(response) {
    return response.data;
}, function(error) {
    // 将错误信息抛出
    // 使用promsie将错误传出
    // return Promise.reject(error);
    // 直接抛出异常
    throw new Error(error);
});


// 响应状态码的判断
axios.defaults.validateStatus = function(status) {
    if (status >= 200 && status < 400) return true;
}

let promise1 = Promise.resolve(100);
let promise2 = Promise.resolve(200);
axios.all([promise1, promise2]).then(results => {
    let [val1, val2] = results;
})