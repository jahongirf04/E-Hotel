import { PartialType } from '@nestjs/mapped-types';
import { CreateImageDto } from './create-image.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Hotel } from '../../hotels/entities/hotel.entity';

export class UpdateImageDto extends PartialType(CreateImageDto) {
  @ApiProperty({ example: 'image.png', description: 'Rasm nomi' })
  @IsString()
  image_path: string;

  @IsNumber()
  @ApiProperty({ example: 4, description: 'Mehmonxona IDsi' })
  hotelId: Hotel;

  @IsString()
  @ApiProperty({ example: 'Luvr mehmonxonasi', description: 'Rasm tavsifi' })
  description: string;
}
