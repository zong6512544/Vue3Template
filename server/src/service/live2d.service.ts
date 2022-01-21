import { Injectable } from '@nestjs/common';
import { LIVE2D_DATA_LIST } from '../enum/live2d'

@Injectable()
export class Live2dService {

  formatFile(list, prefix): Array<object> {
    return list.map(item => {
      return {
        ...item,
        file: prefix + item.file
      }
    })
  }

  formatEveryData({ series, person, currPerson }): object {

    const { model = '', physics = '', textures = [], expressions = [], motions: { flick_head = [], idle = [], sleepy = [] } = {} } = currPerson

    let config = { ...currPerson }

    // live2d静态资源存放地址
    const baseDir = 'static/live2d/source'
    // 匹配人物
    const basePerson = `/${series}/${person}`
    // 全局前缀
    const basePrefix = `${baseDir}${basePerson}`

    
    // 参数格式化：
    
    // 匹配模型
    config.model = `${basePrefix}/${model}`
    // 匹配物理配置（not）
    physics && (config.physics = `${basePrefix}/${physics}`)
    // 随机texture
    config.textures = [`${basePrefix}/textures/${textures[Math.floor(Math.random() * textures.length)]}`]
    // 格式化expressions
    expressions && (config.expressions = this.formatFile(expressions, `${basePrefix}/`))

    // motions:
    // motions-flick_head （not）
    flick_head.length && (config.motions.flick_head = this.formatFile(flick_head, `${basePrefix}/`))
    // motions-idle
    config.motions.idle = this.formatFile(idle, `${basePrefix}/`)
    // motions-sleepy
    config.motions.sleepy = this.formatFile(sleepy, `${basePrefix}/`)

    // return
    return config
  }

  searchLive2dDataList(series, person): object {
    console.log('series, person', series, person)
    // console.log(LIVE2D_DATA_LIST)
    // 系列查找
    const currSeries = LIVE2D_DATA_LIST.find(item => item.series === series)
    // console.log(currSeries)
    // 人物查找
    const currPerson = JSON.parse(JSON.stringify(currSeries.person[person]))
    // console.log(currPerson)
    const formatPerson = this.formatEveryData({ series, person, currPerson })
    // console.log(formatPerson)
    // 返回结果
    return formatPerson
  }

  getResource(data): string {
    const { series = '', person = '' } = data
    const res = this.searchLive2dDataList(series, person)
    return JSON.stringify(res)
  }
}
