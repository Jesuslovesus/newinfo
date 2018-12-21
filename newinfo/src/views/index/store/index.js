/**
 * 导出store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import app from './modules/app'
import getters from './getters'
import permission from './modules/permission'
import place from './modules/place'
// 分布在各模块中的 store
// import addnation from "../views/control-center/store/addnation";

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    app,
    permission,
    place
    // addnation
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
