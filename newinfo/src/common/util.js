/**
 * 全局方法类
 */

// 如果使用了全局变量
// import store from '../store'
import * as consts from './consts'
// import urlTemplate from 'url-template'
export default {

/**
 * 对象深度拷贝
 * 使用方法：
 * p:需要拷贝的对象
 * c:需要拷贝的容器；如果p为数组就写: '[]'，p为{}对象时可省略
 */

  copyObject(p,c) {
    c = c || {}
    for(let i in p){
    // 属性i是否为p对象的自有属性
      if(p.hasOwnProperty(i)){
      // 属性i是否为复杂类型
        if(typeof p[i] === 'object'){
        // 如果p[i]是数组，则创建一个新数组；是对象就创建一个新对象
          c[i] = Array.isArray(p[i])?[]:{}
          // 递归拷贝复杂类型属性
          this.copyObject(p[i], c[i])
        }else{
        // 属性是基础类型时，直接拷贝
          c[i] = p[i]
        }
      }
    }
    return c
  },
  /**
    * Token  此处token
    */

  getAccessToken(){
    var token = this.getLocalStorage(consts.SESSION_TOKEN, '{refreshToken:\'refreshToken\'}')
    if(token){
      var jsonToken = JSON.parse(token)
      return jsonToken.refreshToken ? jsonToken.refreshToken : ''
    }
    return ''
  },
  setToken(token) {
    // 比较与之前的是否相同
    let otoken = this.getLocalStorage(consts.SESSION_TOKEN , '{refreshToken:\'refreshToken\'}')
    if(otoken){
      otoken = JSON.parse(otoken)
      otoken.accessToken = token.accessToken
      otoken.refreshToken = token.refreshToken
      if(token.userId || token.id){
        otoken.userId = token.userId || token.id
      }
      if(token._links){
        otoken._links = token._links
      }
    }else{
      otoken = token
    }
    otoken.startTime = new Date().valueOf()
    this.setLocalStorage(consts.SESSION_TOKEN, JSON.stringify(otoken))
  },
  /**
    * sessionstorage
    */
  setSessionStorage(key, value){
    window.sessionStorage.setItem(key, value)
  },
  getSessionStorage(key){
    window.sessionStorage.getItem(key)
  },
  removeSessionStorage(key){
    window.sessionStorage.removeItem(key)
  },
  /**
   * LocalStorage
   */
  getLocalStorage(key, defaultValue){
    return window.localStorage.getItem(key)?window.localStorage.getItem(key):defaultValue
  },
  setLocalStorage(key, value){
    window.localStorage.setItem(key, value)
  },
  /**
   * url 参数替换 参数替换函数，需要npm安装 url-template 跟后端接口配合
   * @param {} url
   * @param {*} templateParams
   */
  // urlFormat(url, templateParams){
  //   return urlTemplate.parse(url).expand(templateParams)
  // }
  trim(str){
    return str ? str.replace(/(^\s*)|\s*$/g, '') : ''
  }
}
