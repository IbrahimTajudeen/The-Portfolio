/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable, } from 'rxjs';
// import * as jwt from 'jsonwebtoken';
import { Request } from 'express';
// import { ConfigService } from '@nestjs/config';


@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  // constructor(private configService: ConfigService) {}
  constructor() {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      const jwtsecret = ''; // this.configService.get<string>('SUPABASE_JWT_SECRET');
      if(!jwtsecret){
        throw new UnauthorizedException('JWT Secret not configured');
      }
      
      // const decoded = jwt.verify(token, jwtsecret);
      // request['user'] = decoded;

      return true;
    } catch (error) {
      throw new UnauthorizedException(`Invalid token: ${error.message}`);
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
