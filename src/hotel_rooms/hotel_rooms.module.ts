import { Module, forwardRef } from '@nestjs/common';
import { HotelRoomsService } from './hotel_rooms.service';
import { HotelRoomsController } from './hotel_rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelRoom } from './entities/hotel_room.entity';
import { HotelsModule } from '../hotels/hotels.module';
import { UserBookedRoom } from '../user_booked_rooms/entities/user_booked_room.entity';
import { RoomType } from '../room_types/entities/room_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HotelRoom])],
  controllers: [HotelRoomsController],
  providers: [HotelRoomsService],
})
export class HotelRoomsModule {}
