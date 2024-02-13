import { PartialType } from '@nestjs/mapped-types';
import { CreateGymDto } from './create-gym.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Hotel } from '../../hotels/entities/hotel.entity';

export class UpdateGymDto extends PartialType(CreateGymDto) {
  @ApiProperty({ example: 'Polvon', description: 'Gym nomi' })
  @IsString()
  name: string;

  @ApiProperty({ example: 4, description: 'Gym yulduzlari' })
  @IsNumber()
  stars: number;

  @IsNumber()
  @ApiProperty({ example: 12, description: 'Mehmonxona IDsi' })
  hotelId: Hotel;
}
