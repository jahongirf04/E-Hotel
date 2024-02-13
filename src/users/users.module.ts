import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from '../mail/mail.module';
import { Repository } from 'typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserCreditCardsModule } from '../user_credit_cards/user_credit_cards.module';
import { UserBookedRoomsModule } from '../user_booked_rooms/user_booked_rooms.module';

@Module({
  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([User]),
    MailModule,
    forwardRef(() => User),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
