/* eslint-disable prettier/prettier */
import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import * as path from 'path';
import { DataService } from './data.service';
import { cwd } from 'process';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('download')
  download(@Res() res: Response) {
    const filePath = path.join(process.cwd(), 'src', 'public','files', 'cv.pdf');
    return res.download(filePath, 'curriculum-vitea.pdf');
  }
}
