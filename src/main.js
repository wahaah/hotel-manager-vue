import Vue from 'vue'
import App from './App.vue'
// 导入路由和状态管理
import router from './router'
import store from './store'

// 省略不用写index.js   与上面不同是导入直接加载运行  上面的是从文件中导入对象
// 导入插件
import './plugins'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
