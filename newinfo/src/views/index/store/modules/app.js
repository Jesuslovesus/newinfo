import * as types from './../types'
import { aboutData, indexMenuData } from '@/common/data/structure'

const app = {
  state: {
    userInfo: null,
    fundFirm: null,
    menuState: false,
    indexMenuState: false,
    menuBtnColor: '#DCDFE6',
    aboutPageData: aboutData,
    assistantMenu: false,
    loginBox: false,
    indexMenuList: indexMenuData,
    // 当前屏幕可视区域
    innerSize: {
      width: 0,
      height: 0,
      level: 'mx'
    },
    // 启动登录页面的动机
    goPage: ''
  },
  mutations: {
    [types.APP_GET_USER_INFO]: (state, data) => {
      state.userInfo = data
    },
    [types.APP_GET_FUND_FIRM]: (state, data) => {
      state.fundFirm = data
    },
    [types.APP_MENU_STATE]: (state, data) => {
      if (data) {
        state.assistantMenu = false
        state.menuState = data
        return
      }
      state.menuState = data
    },
    // 主页的菜单列表 APP_INDEX_MENU_STATE
    [types.APP_INDEX_MENU_STATE]: (state, data) => {
      state.indexMenuState = data
    },
    [types.APP_MENU_BTN_COLOR]: (state, data) => {
      state.menuBtnColor = data
    },
    // 副菜单列表是否已打开 assistant-menu
    [types.APP_ASSISTANT_MENU]: (state, data) => {
      state.menuState = false
      state.assistantMenu = data
    },
    // loginBox
    [types.APP_LOGIN_BOX]: (state, data) => {
      state.loginBox = data
    },
    [types.APP_INNER_SIZE]: (state, data) => {
      state.innerSize.width = data.width
      state.innerSize.height = data.height
      if (data.width > 1100) {
        state.innerSize.level = 'mx'
        // console.log('size:' + state.innerSize.level)
        return
      }
      if (data.width > 900) {
        state.innerSize.level = 'm'
        // console.log('size:' + state.innerSize.level)
        return
      }
      if (data.width < 760) {
        state.innerSize.level = 'sm'
        // console.log('size:' + state.innerSize.level)
        return
      }
    }
  },
  actions: {
    App_GetUserInfo: ({ commit }) => {
      return new Promise(resolve => {
        let data = {
          name: '小黑',
          id: '123'
        }
        commit(types.APP_GET_USER_INFO, data)
        resolve(data)
      })
    },
    App_GetFundFirm: ({ dispatch, commit }) => {
      return new Promise(resolve => {
        let data = [
          {
            team: 1,
            id: 1
          },
          {
            team: 2,
            id: 2
          }
        ]
        commit(types.APP_GET_FUND_FIRM, data)
        dispatch('Perm_GetMenuPermission', data).then(routerData => {
          resolve(routerData)
        })
      })
    }
  }
}

export default app
