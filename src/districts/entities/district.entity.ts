import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hotel } from "../../hotels/entities/hotel.entity";
import { Region } from "../../regions/entities/region.entity";
import { Injectable } from "@nestjs/common";

@Entity()
@Injectable()
export class District {
  @ApiProperty({ example: 1, description: 'Unikal id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Chilonzor', description: 'Tuman nomi' })
  @Column()
  name: string;

  @ApiProperty({
    example: 1,
    description: 'Viloyat/shaxar IDsi',
  })
  @ManyToOne(() => Region)
  regionId: Region;
}
