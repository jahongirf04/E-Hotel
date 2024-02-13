import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HotelRoom } from "../../hotel_rooms/entities/hotel_room.entity";
import { Injectable } from "@nestjs/common";

@Entity()
@Injectable()
export class RoomType {
  @ApiProperty({ example: 1, description: 'Unikal id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Lux', description: 'Xona turi nomi' })
  @Column()
  name: string;
}
