import { Module, forwardRef } from '@nestjs/common';
import { UserBookedRoomsService } from './user_booked_rooms.service';
import { UserBookedRoomsController } from './user_booked_rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBookedRoom } from './entities/user_booked_room.entity';
import { UsersModule } from '../users/users.module';
import { HotelRoomsModule } from '../hotel_rooms/hotel_rooms.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserBookedRoom]),
    forwardRef(() => UserBookedRoom),
  ],
  controllers: [UserBookedRoomsController],
  providers: [UserBookedRoomsService],
})
export class UserBookedRoomsModule {}
