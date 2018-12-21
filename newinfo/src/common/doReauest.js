import { doReauest } from './fetch'

// 返回所有的少数民族列表
export function getNationsList(option){
  return doReauest('/bread/v1/nations', 'GET', option)
}

// 查询民族详情
export function getNationsData(option){
  return doReauest(`/bread/v1/nations/${option.id}`, 'GET', option)
}

// 返回系统内所有的省份列表 getProvincesList
export function getProvincesList(option){
  return doReauest('/bread/v1/provinces', 'GET', option)
}

// 查询地区详情
export function getProvincesData(option){
  return doReauest(`/bread/v1/provinces/${option.id}`, 'GET', option)
}