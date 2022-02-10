import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/transactions') // o padrão da url
  getHello(): string {
    return this.appService.getHello();
  }
}
