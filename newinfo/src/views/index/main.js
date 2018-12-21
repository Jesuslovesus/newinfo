require('!style-loader!css-loader!less-loader!./../../assets/style/index.less')

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/common/directives'

import '../../registerServiceWorker'
import VueRouter from 'vue-router'

// 减小体积，模块化引入，具体参考官方文档 =============================   UI
import {
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Message,
  // Tabs,
  // TabPane,
  // Badge,
  Dialog,
  Input,
  Tooltip,
  Carousel,
  CarouselItem,
  // Select,
  // Option
  Loading
} from 'element-ui'

Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
// Vue.use(Tabs)
// Vue.use(TabPane)
// Vue.use(Badge)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Tooltip)
Vue.use(Carousel)
Vue.use(CarouselItem)
// Vue.use(Select)
// Vue.use(Option)
Vue.use(Loading.directive)

// Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message


// 减小体积，模块化引入，具体参考官方文档 =============================   UI end

// 引入 =======================   vue-amap
import AMap from 'vue-amap'
Vue.use(AMap)
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'f51a4baee81a9f0f817c52dbb32b892b',
  v: '1.4.4'
})

// 主路由
import { indexRouterMap, asyncRouterMap } from '@/views/index/router'
Vue.use(VueRouter)
Vue.config.productionTip = false

let routes = []
routes = indexRouterMap

const router = new VueRouter({
  routes
})

// 后期有权限的话会在 permission 里过滤
router.addRoutes(asyncRouterMap)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
