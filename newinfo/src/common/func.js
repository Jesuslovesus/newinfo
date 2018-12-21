/**
 * 存储link的名字，便于优化修改（中介使用，后期优化）
 */
//  例如

export default {
  self: 'self',
  // 登录
  login: '/bread/v1/login',
  // 获取所有省份
  getProvincesList: '/bread/v1/provinces',
  // 获取指定省份...
  getProvincesDetails: '/bread/v1/provinces/',
  // 获取所有少数民族
  getMinorityListAll: '/bread/v1/nations',
  // 获取指定少数民族...
  getMinorityList: '/bread/v1/nations/'

}
