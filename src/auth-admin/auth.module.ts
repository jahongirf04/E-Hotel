import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenGuard } from '../common/guards';
import { APP_GUARD } from '@nestjs/core';
import { Admin } from '../admins/entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from '../mail-admin/mail.module';

@Module({
  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([Admin]),
    MailModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AccessTokenGuard,
    // },
  ],
})
export class AuthModuleAdmin {}
