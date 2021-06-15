// 工具包
// 请求相关的方法
import axios from 'axios'

//导入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 初始化一个Axios对象
const instance = axios.create({
    baseURL: 'http://bingjs.com:83',  // 请求的接口地址根路径
    timeout: 1000, // 超时时间 
});




// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 加个数据加载条  nprogress
    NProgress.start()
    return config;
  }, function (error) {
    // 对请求错误做些什么
    NProgress.done()
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    NProgress.done()
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    NProgress.done()
    return Promise.reject(error);
  });



  // get
let get = async function(url,params){
    let {data} = await instance.get(url,{params})
    return data
}

// post
let post = async function(url,params){
    let {data} = await instance.post(url,params)
    return data
}

export {
    get,
    post
}