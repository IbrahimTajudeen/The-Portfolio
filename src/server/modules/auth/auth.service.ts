/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as nodemailer from 'nodemailer';
import { Http2ServerRequest } from 'http2';

@Injectable()
export class AuthService {

  private transporter;
  constructor(){
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'donslice6@gmail.com',
        pass: 'ruqh nssx ivjr sljo'
      }
    });
  }

  login(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  async sendEmail(body: any) {
    const { name, email, subject, message } = body;
    return await this.transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'donslice6@gmail.com',
      subject: subject,
      html: `<p>${message}</p>`,
    });
  }
}
