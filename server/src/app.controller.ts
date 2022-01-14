import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Live2dService } from './service/live2d.service';

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
