const trim = str => {
  return str ? str.replace(/(^\s*)|\s*$/g, '') : ''
}

// 搜索组件
const searchfiler = (type, val, datalist, keys, color) => {
  let colors = color
  if(!colors){
    colors = '#f56c6c'
  }
  if (datalist.length < 1) return
  const data = JSON.parse(JSON.stringify(datalist))
  let result = data

  if (trim(val)) {
    result = []
    data.map(row => {
      const tmpArr = []
      keys.map(item => {
        if (
          row[item] &&
              JSON.stringify(row[item]) !== '{}' &&
              row[item].toString().indexOf(val) > -1
        ) {
          const regex = new RegExp(val)
          row[`${item}Origin`] = row[item]
          if(type){
            row[item] = row[item]
              .toString()
              .replace(regex, `<strong class="search-strong" style="color:${colors};">${val}</strong>`)
          }
          // else{
          //   row[item] = row[item]
          //       .toString()
          //       .replace(regex, `${val}`)
          // }
          tmpArr.push(row)
        }
      })
      if (tmpArr.length > 0) {
        result.push(tmpArr[tmpArr.length - 1])
      }
    })
  }
  return result
}

// 判断是不是微信浏览器
//判断是否是微信浏览器的函数
const isWeChat = () =>{
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  let ua = window.navigator.userAgent.toLowerCase()
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    return true
  }else{
    return false
  }
}

export { searchfiler, isWeChat}