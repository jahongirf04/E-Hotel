import { isEmpty } from "rxjs";
import {IsEmail, IsNotEmpty, IsNumber, IsString} from "class-validator"
import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
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
