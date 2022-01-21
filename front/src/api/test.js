import request from '@/axios/index.js'

export function getUserInfo(data) {
  return request({
    url: '/userInfo',
    method: 'get',
    data
  })
}
