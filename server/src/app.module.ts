import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Live2dController } from './controller/live2d.controller'
import { Live2dService } from './service/live2d.service';

@Module({
  imports: [],
  controllers: [AppController, Live2dController],
  providers: [AppService, Live2dService],
})
export class AppModule {}
