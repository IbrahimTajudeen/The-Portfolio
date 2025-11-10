/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Redirect } from '@nestjs/common';
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
}
