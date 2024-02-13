import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HotelRoom } from "../../hotel_rooms/entities/hotel_room.entity";
import { Image } from "../../images/entities/image.entity";
import { Restaurant } from "../../restaurants/entities/restaurant.entity";
import { Gym } from "../../gyms/entities/gym.entity";
import { District } from "../../districts/entities/district.entity";
import { Injectable } from "@nestjs/common";

@Entity()
@Injectable()
export class Hotel {
  @ApiProperty({ example: 1, description: 'Unikal id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Mehmonxona', description: 'Nomi' })
  @Column({ nullable: true })
  name: string;

  @ApiProperty({ example: 150, description: "Sig'imi" })
  @Column()
  capacity: number;

  @ApiProperty({ example: '99909009990', description: 'Raqami' })
  @Column()
  phone_number: string;

  @ApiProperty({ example: 20, description: 'Qavatlar soni' })
  @Column({ nullable: true })
  number_of_floors: number;

  @ApiProperty({ example: '2019-07-07', description: 'Qurilgan sanasi' })
  @Column({ nullable: true })
  builtAt: Date;

  @ApiProperty({
    example: 'goglemao.com/location/fdjfknvd',
    description: 'Joylashuv havolasi',
  })
  @Column({ nullable: true })
  location_link: string;

  @ApiProperty({ example: 4, description: 'Yulduzlari' })
  @Column({ nullable: true })
  stars: number;

  @ApiProperty({
    example: 1,
    description: 'Tuman idisi',
  })
  @ManyToOne(() => District)
  districtId: District;
}
