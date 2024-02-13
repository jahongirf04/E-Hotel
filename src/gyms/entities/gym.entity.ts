import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Hotel } from "../../hotels/entities/hotel.entity";
import { Injectable } from "@nestjs/common";

@Entity()
@Injectable()
export class Gym {
  @ApiProperty({ example: 1, description: 'Unikal id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Polvon', description: 'Gym nomi' })
  @Column()
  name: string;

  @ApiProperty({ example: 4, description: 'Gym yulduzlari' })
  @Column()
  stars: number;

  @ApiProperty({ example: 12, description: 'Mehmonxona IDsi' })
  @ManyToOne(() => Hotel)
  hotelId: Hotel;
}
