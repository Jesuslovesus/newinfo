/**
 * 路由过滤以及菜单权限
 */

import { asyncRouterMap } from '@/views/index/router'
import * as types from './../types'
import { menuList } from '@/common/data/structure'

/**
 * 权限过滤
 */

function filterAsyncRouter(asyncRouterMap, menuPermission) {
  // 此处添加 asyncRouterMap,menuPermission对比 过滤
  if (menuPermission) {
    return menuList
    //  return asyncRouterMap
  }
  //  return asyncRouterMap
  // 此处模拟
  return menuList
}
const permission = {
  state: {
    routerPermision: []
  },
  mutations: {
    [types.PERM_ROUTER_PERMISSION]: (state, data) => {
      // eslint-disable-next-line
       console.log('过滤后的网站页面的路由：', data)
      state.routerPermision = data
    }
  },
  actions: {
    Perm_GetMenuPermission: ({ commit }, data) => {
      return new Promise(resolve => {
        const accessedRouted = filterAsyncRouter(asyncRouterMap, data)
        // 生成路由菜单
        commit(types.PERM_ROUTER_PERMISSION, accessedRouted)
        resolve(accessedRouted)
      })
    }
  }
}

export default permission
