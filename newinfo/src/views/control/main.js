import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../../registerServiceWorker'

// 减小体积，模块化引入，具体参考官方文档 =============================   UI
import {
  Loading
} from 'element-ui'

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service

// 减小体积，模块化引入，具体参考官方文档 =============================   UI end

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
