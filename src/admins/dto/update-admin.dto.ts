import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  @ApiProperty({
    example: 'user1',
    description: 'Foydalanuvchi ismi',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'user@gmail.com',
    description: 'Foydalanuvchi emaili',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'qwerty',
    description: 'Foydalanuvchi paroli',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 18,
    description: 'Foydalanuvchi yoshi',
  })
  @IsNumber()
  age: number;
}
