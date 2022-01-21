/*
 * @Author: qianqian.zhao
 * @Date: 2021-01-05 14:55:46
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2021-10-19 10:29:53
 * @Description: 打包前置
 */
const { exec } = require('child_process')
const config = require('../config')

const target = process.argv[2] || 'test'
const cmd = `vue-cli-service build --mode ${target}_properties`

// 执行打包命令
const temp = exec(
  cmd,
  {
    detached: true,
    maxBuffer: 8 * 1024 * 1024 // 5m
  },
  function (error, stdout, stderr) {
    if (error) console.log(error)
  }
)
temp.stdout.pipe(process.stdout)
