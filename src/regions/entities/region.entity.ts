import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { District } from "../../districts/entities/district.entity";

@Entity()
export class Region {
  @ApiProperty({ example: 1, description: 'Unikal id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Toshkent', description: 'Viloyat/shahar nomi' })
  @Column()
  name: string;
}
