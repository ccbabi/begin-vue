import request from '@/common/request'

export function getApiXxx () {
  return request('get', '/api/xxx')
}

export function testJsonp (data) {
  return request('jsonp', 'http://suggest.58.com.cn/home_hotword.do', data)
}
