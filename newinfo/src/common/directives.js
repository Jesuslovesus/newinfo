/**
 * 全局自定义指令
 */

import Vue from 'vue'
import Clickoutside from './utils/clickoutside'

/**
  * 点击元素外面触发该事件
  */
Vue.directive('clickoutside', Clickoutside)
