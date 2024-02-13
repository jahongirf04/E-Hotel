import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { HotelRoom } from "../../hotel_rooms/entities/hotel_room.entity";

@Entity()
export class UserBookedRoom {
  @ApiProperty({ example: 1, description: 'Unikal id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 190, description: 'Bron qilgan foydalanuvchi IDsi' })
  @ManyToOne(() => User)
  userId: User;

  @ApiProperty({ example: 99, description: 'Bron qilingan xona IDsi' })
  @ManyToOne(() => HotelRoom)
  roomId: HotelRoom;

  @ApiProperty({ example: '2021-11-11', description: 'Bron qilingan vaqt' })
  @Column()
  booked_date: string;

  @ApiProperty({ example: '2022-11-11', description: 'user ketgan kun vaqti' })
  @Column()
  user_left_date: string;
}
