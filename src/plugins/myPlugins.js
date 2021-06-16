import {get,post,getToken} from '../utils/request'
// 自定义插件
export default {
    install: function(Vue){
        // 3. 注入组件选项
        Vue.mixin({
            created: function () {
            // 逻辑...
            },
            methods:{
                $get(url,params){
                    return get(url,params)
                },
                $post(url,params){
                    return post(url,params)
                },
                // 
                $getToken(){
                    // 执行该方法就会将浏览器缓存中的token保存到axios的请求头
                    getToken()
                }
            }
        })

    }
}