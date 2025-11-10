import { Module } from '@nestjs/common';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        // ConfigModule.forRoot({ isGlobal: true }),
        PagesModule, 
        AdminModule,
        AuthModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
