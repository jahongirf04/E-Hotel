import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { Repository } from 'typeorm';
import { Image } from '../images/entities/image.entity';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotel)
    private usersRepository: Repository<Hotel>,
  ) {}

  async create(createUserDto: CreateHotelDto) {
    const user = await this.usersRepository.create(createUserDto);
    this.usersRepository.save(user);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.find({relations: {districtId: true}});
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id
      },
      relations: {
       districtId : true,
      },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateHotelDto) {
    await this.usersRepository.update(id, updateUserDto);
    return 'Updated';
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    return id;
  }
}
