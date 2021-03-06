// 需要找个地方执行 main.js 但main中不能太繁琐要简洁(这个文件会自动在main.js中引入)

// 注册element ui组件库
import Vue from 'vue';
// 官网 快速上手
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
// 注册myPlugin插件
import myPlugin from './myPlugins'
Vue.use(myPlugin);