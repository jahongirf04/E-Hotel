import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Hotel } from "../../hotels/entities/hotel.entity";
import { Injectable } from "@nestjs/common";

@Entity()
@Injectable()
export class Image {
  @ApiProperty({ example: 1, description: 'Unikal id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'image.png', description: 'Rasm nomi' })
  @Column()
  image_path: string;

  @ApiProperty({ example: 4, description: 'Mehmonxona IDsi' })
  @ManyToOne(() => Hotel)
  hotelId: Hotel;

  @ApiProperty({ example: 'Luvr mehmonxonasi', description: 'Rasm tavsifi' })
  @Column()
  description: string;
}
