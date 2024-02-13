import { PartialType } from '@nestjs/mapped-types';
import { CreateRegionDto } from './create-region.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateRegionDto extends PartialType(CreateRegionDto) {
  @ApiProperty({ example: 'Toshkent', description: 'Viloyat/shahar nomi' })
  @IsString()
  name: string;
}
