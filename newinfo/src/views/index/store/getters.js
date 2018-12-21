/**
 * 用于全局的基本信息
 */

const getters = {
  userInfo: state => state.app.userInfo,
  fundFirm: state => state.app.fundFirm,
  menuState: state => state.app.menuState,
  indexMenuState: state => state.app.indexMenuState,
  indexMenuList: state => state.app.indexMenuList,
  aboutPageData: state => state.app.aboutPageData,
  menuBtnColor: state => state.app.menuBtnColor,
  assistantMenu: state => state.app.assistantMenu,
  loginBox: state => state.app.loginBox,
  innerSize: state => state.app.innerSize,
  menuPermission: state => state.permission.routerPermision
}

export default getters
