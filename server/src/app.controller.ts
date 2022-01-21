import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Live2dService } from './service/live2d.service';

@Controller('userInfo')
export class AppController {
  
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }
}
