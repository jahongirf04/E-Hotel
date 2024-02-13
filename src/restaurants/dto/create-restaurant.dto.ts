import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { Hotel } from "../../hotels/entities/hotel.entity";

export class CreateRestaurantDto {
  @ApiProperty({ example: 'Oqsuv', description: 'Restoran nomi' })
  @IsString()
  name: string;

  @ApiProperty({ example: 4, description: 'Restoran yulduzlari' })
  @IsNumber()
  stars: number;

  @IsNumber()
  @ApiProperty({ example: 12, description: 'Mehmonxona IDsi' })
  hotelId: Hotel;
}
