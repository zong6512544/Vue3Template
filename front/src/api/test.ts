/*
 * @Author: zongbao.yao
 * @Date: 2022-01-11 11:57:37
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2022-01-21 14:55:25
 * @Description:
 */
import request from '@/axios/index'

export const getUserInfo = (data = {}): unknown => {
  return request({
    url: '/userInfo',
    method: 'get',
    data
  })
}
