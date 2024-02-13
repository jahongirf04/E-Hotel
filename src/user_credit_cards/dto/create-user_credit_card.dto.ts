import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { User } from "../../users/entities/user.entity";

export class CreateUserCreditCardDto {
  @ApiProperty({ example: '8600123456789101', description: 'Karta raqami' })
  @IsString()
  card_number: string;

  @ApiProperty({
    example: '2025-01-01',
    description: 'Karta amal qilish muddati',
  })
  @IsString()
  card_expiration_time: string;

  @ApiProperty({ example: 77, description: 'Karta egasi IDsi' })
  @IsNumber()
  userId: User;
}
