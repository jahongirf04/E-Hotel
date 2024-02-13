import { Injectable } from '@nestjs/common';
import { CreateHotelRoomDto } from './dto/create-hotel_room.dto';
import { UpdateHotelRoomDto } from './dto/update-hotel_room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelRoom } from './entities/hotel_room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HotelRoomsService {
  constructor(
    @InjectRepository(HotelRoom)
    private usersRepository: Repository<HotelRoom>,
  ) {}

  async create(createUserDto: CreateHotelRoomDto) {
    const user = await this.usersRepository.create(createUserDto);
    this.usersRepository.save(user);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.find({relations: {hotelId: true}});
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id
      },
      relations: {
      hotelId  : true,
      },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateHotelRoomDto) {
    await this.usersRepository.update(id, updateUserDto);
    return 'Updated';
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    return id;
  }
}
