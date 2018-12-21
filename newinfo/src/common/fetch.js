/**
 * 各种请求的封装函数
 */

import ds from './ds'
//  import util from './util'

function nullPromise(){
  return new Promise((resolve, reject) => {
    return reject()
  })
}

export function doRequest(url,method,config){
  return ds[method]({
    showError: config && config.showError != undefined ? config.showError : true,
    data: config && config.data != undefined ? config.data : {},
    url: url,
    error: config && config.error ? config.error : false
  })
}

/**
  * _link的改造，根据返回链接的内容 仅供参考
  * @param {_link} url
  * @param {*} needLinks
  */
//  function getRealURL(url,needLinks) {
//    if(needLinks === null || needLinks === undefined || needLinks === ''){
//      return url
//    }else{
//      if(url.indexOf('?') === -1){
//        return url + '?__need-links=' + needLinks
//      }else {
//        return url + '&__need-links=' + needLinks
//      }
//    }
//  }

/**
  * 剥去link   接口需要返回固定格式的带“_link”对象的参数值  仅供参考
  */
//  function resetLinksOptions(options, needLinks){
//    let url = options.object._links[options.func].template == true?
//   //  参数替换函数，需要npm安装 url-template 跟后端接口配合
//   util.urlFormat(
//     getRealURL(options.object._links[options.func].href, needLinks),
//     options.templateParams
//   ):
//   getRealURL(options.object._links[options.func].href, needLinks)
//    return {
//      showError:
//     options && options.showError != undefined ? options.showError : true,
//      data: options && options.data != undefined ? options.data : {},
//      url: url
//    }
//  }
/**
 * 根据接口请求url的方式调整传入参数
 */
function resetGetOptions(options){
  //  if(options.data){

  //  }
  return options
}
/**
 * 入口级别的请求
 * el
 * export function getUser(option){
 *  return doReauest('user/ref/','GET',option)
 * }
 */

export function doReauest(url, method, config){
  return ds[method]({
    url: url,
    data: config && config.data !== undefined ? config.data : {}
  })
}

//  直接使用的函数
//  GET
//  export function getLinkData(options, needLinks) {
export function getLinkData(options) {
  //  if(!options.object._links[options.func]){
  //    return nullPromise()
  //  }
  //  return ds.GET(resetLinksOptions(options, needLinks))
  return ds.GET(resetGetOptions(options))
}
//  POST
export function postLinkData(options) {
  //  if(!options.object._links[options.func]){
  //    return nullPromise()
  //  }
  return ds.POST(options)
}
//  PUT
export function putLinkData(options) {
  if(!options.object._links[options.func]){
    return nullPromise()
  }
  return ds.PUT(options)
}
//  DELETE
export function delLinkData(options) {
  if(!options.object._links[options.func]){
    return nullPromise()
  }
  return ds.DELETE(options)
}