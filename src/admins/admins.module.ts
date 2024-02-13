import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { MailService } from '../mail-admin/mail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { MailModule } from '../mail-admin/mail.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([Admin]),
    MailModule,
  ],
  controllers: [AdminsController],
  providers: [AdminsService, MailService],
})
export class AdminsModule {}
