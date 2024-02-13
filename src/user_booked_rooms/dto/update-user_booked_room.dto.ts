import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBookedRoomDto } from './create-user_booked_room.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from '../../users/entities/user.entity';
import { HotelRoom } from '../../hotel_rooms/entities/hotel_room.entity';

export class UpdateUserBookedRoomDto extends PartialType(CreateUserBookedRoomDto) {
  @ApiProperty({ example: 190, description: 'Bron qilgan foydalanuvchi IDsi' })
  @IsNumber()
  @IsNotEmpty()
  userId: User;

  @IsNumber()
  @ApiProperty({ example: 99, description: 'Bron qilingan xona IDsi' })
  roomId: HotelRoom;

  @IsString()
  @ApiProperty({ example: '2021-11-11', description: 'Bron qilingan vaqt' })
  booked_date: string;

  @IsString()
  @ApiProperty({ example: '2022-11-11', description: 'user ketgan kun vaqti' })
  user_left_date: string;
}
