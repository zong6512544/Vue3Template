import { Controller, Get, Query } from '@nestjs/common';
import { Live2dService } from '../service/live2d.service';
import { Live2dDTO } from 'src/dto/live2d.dto';
@Controller('live2d')
export class Live2dController {
  constructor(private readonly live2dService: Live2dService) {}

  @Get()
  getResource(@Query() query: Live2dDTO): string {
    return this.live2dService.getResource(query);
  }
}
