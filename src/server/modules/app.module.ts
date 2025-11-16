/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { DataModule } from './data/data.module';

@Module({
    imports: [
        // ConfigModule.forRoot({ isGlobal: true }),
        PagesModule, 
        AdminModule,
        AuthModule,
        DataModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
