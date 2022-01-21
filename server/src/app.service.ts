import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      result: {
        name: 'yzb',
        sex: 1,
        age: 22,
      },
      code: 10001,
      msg: '请求成功！',
    };
  }
}
