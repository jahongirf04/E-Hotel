import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateHotelDto {
  @ApiProperty({
    example: 'Vizantiya',
    description: 'Mehmonxona nomi',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: '+998909889777',
    description: 'Mehmonxona raqami',
  })
  @IsPhoneNumber()
  phone_number: string;

  @ApiProperty({
    example: 150,
    description: "Mehmonxona sig'imi",
  })
  @IsNumber()
  capacity: number;

  @ApiProperty({
    example: 4,
    description: 'Mehmonxona yulduzlari',
  })
  @IsNumber()
  @IsNotEmpty()
  stars: number;
}
