import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserCreditCard } from "../../user_credit_cards/entities/user_credit_card.entity";
import { UserBookedRoom } from "../../user_booked_rooms/entities/user_booked_room.entity";

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'Unikal id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'user1', description: 'Ism' })
  @Column({ nullable: true })
  name: string;

  @ApiProperty({ example: 'gmail@gmail.com', description: 'Email' })
  @Column()
  email: string;

  @ApiProperty({ example: 'qwerty', description: 'Parol' })
  @Column()
  password: string;

  @ApiProperty({ example: 18, description: 'Yoshi' })
  @Column({ nullable: true })
  age: number;

  @ApiProperty({ example: true, description: 'Jinsi' })
  @Column({ nullable: true })
  gender: boolean;

  @ApiProperty({ example: false, description: 'Premium userligi' })
  @Column({ nullable: true })
  is_premium_user: boolean;

  @ApiProperty({ example: 'token:ejfnrjkfbdnfefjnkf', description: 'Token' })
  @Column({ nullable: true })
  token: string;

  @ApiProperty({
    example: 'localhost:3000/verify/erhjbfehkbfhfkf',
    description: 'Tasdiqlov linki',
  })
  @Column({ nullable: true })
  ver_link: string;

  @ApiProperty({
    example: false,
    description: 'Aktiv ekanligi',
  })
  @Column({ nullable: true, default: false })
  is_active: boolean;
}
