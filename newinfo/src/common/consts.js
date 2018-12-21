/**
 * 全局变量
 * Token、按键Code...
 */

export const SESSION_TOKEN = 'token'

//  接口调用会返回登录页面对应的错误code
export const ERR_CODE_TO_LOGIN = [
  'CommonException.AuthorizationHeaderBlankException',
  'CommonException.UserNotExistsException'
]