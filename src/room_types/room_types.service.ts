import { Injectable } from '@nestjs/common';
import { CreateRoomTypeDto } from './dto/create-room_type.dto';
import { UpdateRoomTypeDto } from './dto/update-room_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomType } from './entities/room_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomTypesService {
  constructor(
    @InjectRepository(RoomType)
    private usersRepository: Repository<RoomType>,
  ) {}

  async create(createUserDto: CreateRoomTypeDto) {
    const user = await this.usersRepository.create(createUserDto);
    this.usersRepository.save(user);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findBy({ id });
    return user;
  }

  async update(id: number, updateUserDto: UpdateRoomTypeDto) {
    await this.usersRepository.update(id, updateUserDto);
    return 'Updated';
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    return id;
  }
}
