/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Render('admin/login')
  @Get('login')
  login(){
    return {
        page: 'login',
        title: 'Login to your portfolio',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Nexo code',
      }
    }
  }

  @Render('admin/layout')
  @Get(['index', ''])
  index(){
    return {
        page: 'index',
        title: 'Dashboard',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Nexo code',
      }
    }
  }

  
  @Render('admin/layout')
  @Get(['home'])
  home(){
    return {
        page: 'home',
        title: 'Home Settings',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Nexo code',
      }
    }
  }
}


