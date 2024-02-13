import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoomTypeDto {
  @ApiProperty({ example: 'Lux', description: 'Xona turi nomi' })
  @IsString()
  name: string;
}
