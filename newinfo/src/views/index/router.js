/**
 * 路由，分为全局路由和需要过滤的路由
 */

import layout from './pages/layout'

let indexRouterMap = [
  // {
  //   path: '/layout',
  //   meta: {
  //     title: 'layout'
  //   },
  //   name: 'layout',
  //   component: layout,
  //   hidden: true
  // },
  {
    path: '/layout',
    component: layout,
    name: 'layout-place',
    hidden: true,
    children: [
      // 今日推荐，每次打开的展示
      // {
      //   path: "today",
      //   meta: {
      //     title: "Into Minority"
      //   },
      //   component: resolve => {
      //     require(["../views/today/index"], resolve);
      //   },
      //   name: "today",
      //   hidden: true
      // },
      // {
      //   path: "place",
      //   meta: {
      //     title: "展页"
      //   },
      //   name: "place",
      //   component: resolve => {
      //     require(["../views/place/index"], resolve);
      //   },
      //   hidden: true
      // },
      // 少数民族详细信息 table 手机端
      // {
      //   path: "minority",
      //   meta: {
      //     title: "详情"
      //   },
      //   name: "minority",
      //   component: resolve => {
      //     require(["../views/content/phone/index"], resolve);
      //   },
      //   hidden: true
      // },
      // 少数民族详细信息 table pc端
      // {
      //   path: "minorityPC",
      //   meta: {
      //     title: "详情"
      //   },
      //   name: "minority",
      //   component: resolve => {
      //     require(["../views/content/pc/index"], resolve);
      //   },
      //   hidden: true
      // },
      // {
      //   path: "about",
      //   meta: {
      //     title: "关于"
      //   },
      //   name: "about",
      //   component: resolve => {
      //     require(["../views/about/index"], resolve);
      //   },
      //   hidden: true
      // },
      {
        path: 'minoritys',
        meta: {
          title: 'minoritys'
        },
        name: 'minoritys',
        component: resolve => {
          require(['@/views/index/pages/minoritys'], resolve)
        },
        hidden: true
      }
      // {
      //   path: "pray",
      //   meta: {
      //     title: "Pray"
      //   },
      //   name: "pray",
      //   component: resolve => {
      //     require(["../views/pray/index"], resolve);
      //   },
      //   hidden: true
      // }
    ]
  },

  // 主页（放在place的子路由时swiper会有bug，刚好也提高了首页加载的效率）
  {
    path: '/index',
    alias: '/',
    meta: {
      title: 'Into Minority'
    },
    component: resolve => {
      require(['@/views/index/pages/index'], resolve)
    },
    name: 'index',
    hidden: true
  }
  // {
  //   path: "*",
  //   redirect: "/404",
  //   name: "not_founds",
  //   hidden: true
  // },
  // {
  //   path: "/404",
  //   name: "not_found",
  //   component: resolve => {
  //     require(["../views/404/index"], resolve);
  //   },
  //   hidden: true
  // }
]

// 控制中心的权限路由
let asyncRouterMap = []

// 拼装路由
// indexRouterMap = indexRouterMap
// .concat(controlCenterPageRouterMap);
// .concat(userPageRouterMap)
// .concat(traderPageRouterMap)

export { indexRouterMap, asyncRouterMap }
