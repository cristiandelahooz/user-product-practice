import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  getHello(): string {
    return 'this.appService.getHssllooo()';
  }
  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    return { message: 'login endpoint', body };
  }
}
