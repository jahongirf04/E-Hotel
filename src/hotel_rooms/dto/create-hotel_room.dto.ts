import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, isNumber } from "class-validator";
import { Hotel } from "../../hotels/entities/hotel.entity";

export class CreateHotelRoomDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 77, description: 'Xona raqami' })
  room_number: number;

  @IsBoolean()
  @ApiProperty({ example: true, description: 'Bron qilinganligi' })
  is_booked: boolean;

  @IsNumber()
  @ApiProperty({ example: 100, description: 'Kungia necha pul' })
  per_day_price: number;

  @IsNumber()
  @ApiProperty({ example: 100, description: 'Mehmonxona IDsi' })
  hotelId: Hotel
}
