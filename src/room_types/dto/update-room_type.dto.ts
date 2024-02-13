import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomTypeDto } from './create-room_type.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateRoomTypeDto extends PartialType(CreateRoomTypeDto) {
  @ApiProperty({ example: 'Lux', description: 'Xona turi nomi' })
  @IsString()
  name: string;
}
