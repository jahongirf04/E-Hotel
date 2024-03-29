import { PartialType } from '@nestjs/mapped-types';
import { CreateDistrictDto } from './create-district.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Region } from '../../regions/entities/region.entity';

export class UpdateDistrictDto extends PartialType(CreateDistrictDto) {
  @ApiProperty({ example: 'Chilonzor', description: 'Tuman nomi' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 1,
    description: 'Viloyat/shaxar IDsi',
  })
  @IsNumber()
  regionId: Region;
}
