/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Controller, Post, Body, Redirect, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('login')
  @Redirect()
  login(@Body() createAuthDto: CreateAuthDto) {
    const data = this.authService.login(createAuthDto);
    // some other logic here
    
    return {
      url: '/admin',
      statusCode: 301
    }
  }

  @Post('send-email')
  @Redirect()
  async email(@Body() body : any, @Req() req: any) {
    const data = await this.authService.sendEmail(body);
    console.log('Email sent:', data); 
    return {
      url: '/contact',
      statusCode: 301
    }
  }

}
