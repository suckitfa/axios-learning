### axios
> 基于Promise设计模式来管理的ajax库


### axios支持的方法
> 
1. axios.get([url],[,options]);
2. axios.post([url],[data],[options]);
3. aixos.delete();
4. axios.put();
5. axios.put();


### 配置axios
1. baseURL
2. transformRequest 处理请求参数（对post有作用）
3. transformResponse 将返回的结果进行处理
4. headers 设置请求头
5. params get请求中传递参数
6. paramsSerializer 序列化参数
7. timeout 超时时间设置
8. withCredentials 跨域是否允许凭证
9. responseType 预设放回的结果格式，buffer/text/stream/document
10. validateStatus: 默认认为以2开头才请求成功


### 基于Promise管理
1. 请求成功: promise变为fulfilled


### 返回的结果
```js
axios.get(url,{

}).then(result=>{
    return result.data;
}).catch(reason=>{
    // 跑出错误
    throw new Error(reason);
}).then(data=>{
    console.log(data);
});
```
- config: 自己配置的信息
- DATA 存储的是响应主体内容
- headers: 存储的是响应头信息
- request ajax实例
- status 

### 请求配置

```js
transformRequest: function(data) {
    let result = ``;
    if (!data) return data;
    for(let attr in data) {
        if (!data.hashOwnPropery(attr)) break;
        str += `&${key}=${data[key]}`;
    }
    // 干掉第一个&;
    return str.substring(1);
}
```