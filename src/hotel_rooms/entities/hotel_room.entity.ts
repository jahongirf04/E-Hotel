import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserBookedRoom } from "../../user_booked_rooms/entities/user_booked_room.entity";
import { RoomType } from "../../room_types/entities/room_type.entity";
import { Hotel } from "../../hotels/entities/hotel.entity";
import { Injectable } from "@nestjs/common";

@Entity()
@Injectable()
export class HotelRoom {
  @ApiProperty({ example: 1, description: 'Unikal id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 77, description: 'Xona raqami' })
  @Column()
  room_number: number;

  @ApiProperty({ example: 8, description: 'Mehmonxona IDsi' })
  @ManyToOne(() => Hotel)
  hotelId: Hotel;

  @ApiProperty({ example: true, description: 'Bron qilinganligi' })
  @Column()
  is_booked: boolean;

  @ApiProperty({ example: 100, description: 'Kungia necha pul' })
  @Column()
  per_day_price: number;

  @ApiProperty({ example: 3, description: 'Xona turi IDsi' })
  @ManyToOne(() => RoomType)
  room_typeId: RoomType;
}
