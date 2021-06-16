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
    // headers: {'token': sessionStorage.getItem("token")}  //但是直接放在这是错误的，因为第一次登录时发送请求是没有token的

});

// 虽然在axios官方文档中有个全局设置请求头，等价于上面 仍然会在第一次执行（页面加载就会运行）
// instance.defaults.headers.post['token'] = sessionStorage.getItem('token');

// 写在方法中就可在适当的时间去调用
let getToken = function(){  // 把他给vue 放到plugin
  instance.defaults.headers.common['token'] = sessionStorage.getItem('token');
  alert(sessionStorage.getItem('token'))
}




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
    post,
    getToken
}