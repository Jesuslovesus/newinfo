/**
 * 全局结构的数据对象：菜单、地理列表以及细化列表，后期出现在数据库里
 */

/**
  * 首页展示选择进入的地区列表
  */
//  export const placeList = [
//    {
//      value: 'yunnan',
//      label: '云南',
//      bg: 'red',
//      img: './../../assets/img/index/yunnan.jpeg',
//      show: true
//    },
//    {
//      value: 'sichuan',
//      label: '四川',
//      bg: 'green',
//      img: './../../assets/img/index/yunnan.jpeg',
//      show: false
//    },
//    {
//      value: 'xizang',
//      label: '西藏',
//      bg: 'pink',
//      img: './../../assets/img/index/yunnan.jpeg',
//      show: false
//    },
//    {
//      value: 'xizang',
//      label: '其它',
//      bg: 'pink',
//      img: './../../assets/img/index/yunnan.jpeg',
//      show: false
//    }
//  ]
/**
  * 首页快捷菜单列表
  */
export const indexMenuData = [
  //  iconfont icon-yonghu
  //  {
  //    value: 'login',
  //    label: '',
  //    path: '',
  //    icon: 'iconfont icon-yonghu'
  //  },
  //  minority
  {
    value: 'Minoritys',
    label: '少数民族',
    path: 'minoritys',
    icon: 'el-icon-search'
  },
  //  {
  //    value: 'Pray',
  //    label: '祷告',
  //    path: 'pray',
  //    icon: 'el-icon-star-off'
  //  },
  {
    value: 'About',
    label: '关于',
    path: 'about',
    icon: 'el-icon-tickets'
  },
  {
    value: 'AddNation',
    label: '添加民族',
    path: 'addnation',
    icon: 'el-icon-circle-plus-outline'
  }
  //  {
  //    value: 'Set',
  //    label: '设置',
  //    path: 'set',
  //    icon: 'el-icon-setting'
  //  }
]

/**
  * 菜单列表，直接渲染的数据，添加就会在左边出现，作为权限过滤
  */

export const menuList = [
  {
    value: 'Place',
    label: '推荐地区',
    path: 'index',
    icon: 'el-icon-location-outline'
  },
  //  minority
  {
    value: 'Minoritys',
    label: '少数民族',
    path: 'minoritys',
    icon: 'el-icon-search'
  },
  {
    value: 'Pray',
    label: '祷告',
    path: 'pray',
    icon: 'el-icon-star-off'
  },
  {
    value: 'About',
    label: '关于',
    path: 'about',
    icon: 'el-icon-tickets'
  },
  {
    value: 'AddNation',
    label: '添加民族',
    path: 'addnation',
    icon: 'el-icon-circle-plus-outline'
  },
  {
    value: 'Set',
    label: '设置',
    path: 'set',
    icon: 'el-icon-setting'
  }
]

/**
  * 关于
  */

export const aboutData = [
  {
    title: '本站',
    content: '更快速便捷一站式了解少数民族'
  },
  {
    title: '更新',
    content: '2018.08.03 -'
  },
  {
    title: '加入我们',
    content: '文章数据整理，交互体验等'
  },
  //  {
  //    title: '后期',
  //    content: '快速登录，自定义代祷，日历循环'
  //  },
  {
    title: '初期版本可能存在很多bug，后期将会持续优化',
    content: ''
  }
]