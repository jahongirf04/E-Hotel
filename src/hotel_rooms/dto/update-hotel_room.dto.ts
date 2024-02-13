import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelRoomDto } from './create-hotel_room.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Hotel } from '../../hotels/entities/hotel.entity';

export class UpdateHotelRoomDto extends PartialType(CreateHotelRoomDto) {
  @ApiProperty({ example: 77, description: 'Xona raqami' })
  room_number: number;

  @ApiProperty({ example: true, description: 'Bron qilinganligi' })
  is_booked: boolean;

  @ApiProperty({ example: 100, description: 'Kungia necha pul' })
  per_day_price: number;

  @IsNumber()
  @ApiProperty({ example: 100, description: 'Mehmonxona IDsi' })
  hotelId: Hotel;
}
