import { Module, forwardRef } from '@nestjs/common';
import { UserCreditCardsService } from './user_credit_cards.service';
import { UserCreditCardsController } from './user_credit_cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCreditCard } from './entities/user_credit_card.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserCreditCard]),
    forwardRef(() => UserCreditCard),
  ],
  controllers: [UserCreditCardsController],
  providers: [UserCreditCardsService],
})
export class UserCreditCardsModule {}
