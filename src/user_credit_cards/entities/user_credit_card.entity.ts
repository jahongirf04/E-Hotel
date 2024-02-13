import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class UserCreditCard {
  @ApiProperty({ example: 1, description: 'Unikal id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '8600123456789101', description: 'Karta raqami' })
  @Column()
  card_number: string;

  @ApiProperty({
    example: '2025-01-01',
    description: 'Karta amal qilish muddati',
  })
  @Column()
  card_expiration_time: string;

  @ApiProperty({ example: 77, description: 'Karta egasi IDsi' })
  @ManyToOne(() => User)
  userId: User;
}
