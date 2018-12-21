/**
 * ajax
 */

import $ from 'jquery2'
//  import util from '../common/util'
//  import * as consts from '../common/consts'

let service = function(options, successCall, errorCall) {
  $.ajax({
    //  url: process.env.NODE_ENV === 'production' ? options.url : 'api' + options.url,
    url: options.url,
    //  headers: {
    //    'Accept-Language': '语言等设置信息',
    //    Authorization: 'Bearer' + util.getAccessToken()
    //  },
    type: options.type || 'GET',
    data: options.data,
    dataType: 'json',
    contentType: 'application/json',
    beforeSend() {},
    //success(data,textStatus,jqXHR){
    success(data) {
      //  以下if为自定义设置
      //  if(options.type == 'POST' && data){
      //   //  text
      //  }
      //  if(jqXHR.getResponseHeader('x-aide-accesstoken') && jqXHR.getResponseHeader('x-aide-refreshtoken')){
      //    if(data){
      //      data.accessToken = jqXHR.getResponseHeader('x-aide-accesstoken')
      //      data.refreshToken = jqXHR.getResponseHeader('x-aide-refreshtoken')
      //    }else{
      //      util.setToken({
      //        accessToken: jqXHR.getResponseHeader('x-aide-accesstoken'),
      //        refreshToken: jqXHR.getResponseHeader('x-aide-refreshtoken')
      //      })
      //    }
      //  }
      successCall & successCall(data)
    },
    error(xhr) {
      //  if(!xhr.responseJSON || consts.ERR_CODE_TO_LOGIN.indexOf(xhr.responseJSON.code) > -1){
      //   //  token无效返回登录
      //    window.location.href = '/'
      //    return
      //  }

      //  if(options.showError == undefined || options.showError == true){
      //    if(xhr.responseJSON){
      //      if(options.error){
      //        options.error()
      //      }else if(xhr.responseJSON.message){
      //        window.duyangsir.$message({
      //          message: xhr.responseJSON.message,
      //          type: 'error'
      //        })
      //      }
      //    }
      //  }
      //  if(xhr.responseJSON){
      //    if(xhr.responseJSON.message){
      errorCall && errorCall(xhr.responseJSON.message)
      //    }
      //  }
    },
    complete: function() {}
  })
}

export default {
  GET: function(options) {
    return new Promise((resolve, reject) => {
      options.type = 'GET'
      service(
        options,
        function(data) {
          resolve(data)
        },
        function(err) {
          reject(err)
        }
      )
    })
  },
  POST: function(options) {
    return new Promise((resolve, reject) => {
      options.type = 'POST'
      options.data = JSON.stringify(options.data)
      service(
        options,
        function(data) {
          resolve(data)
        },
        function(err) {
          reject(err)
        }
      )
    })
  },
  PUT: function(options) {
    return new Promise((resolve, reject) => {
      options.type = 'PUT'
      options.data = JSON.stringify(options.data)
      service(
        options,
        function(data) {
          resolve(data)
        },
        function(err) {
          reject(err)
        }
      )
    })
  },
  DELETE: function(options) {
    return new Promise((resolve, reject) => {
      options.type = 'DELETE'
      options.data = JSON.stringify(options.data)
      service(
        options,
        function(data) {
          resolve(data)
        },
        function(err) {
          reject(err)
        }
      )
    })
  }
}
