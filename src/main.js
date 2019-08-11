import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 优先查找文件，如果文件找不到则找目录
// 找到目录，优先加载目录中的 index.js
import router from './router'
// 引入公共样式
import './styles/index.less'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
