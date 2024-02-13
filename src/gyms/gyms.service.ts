import { Injectable, forwardRef } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gym } from './entities/gym.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GymsService {
  constructor(
    @InjectRepository(Gym)
    private usersRepository: Repository<Gym>,
  ) {}

  async create(createUserDto: CreateGymDto) {
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
       hotelId : true,
      },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateGymDto) {
    await this.usersRepository.update(id, updateUserDto);
    return 'Updated';
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    return id;
  }
}
