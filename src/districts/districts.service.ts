import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { District } from './entities/district.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DistrictsService {
  constructor(
    @InjectRepository(District)
    private usersRepository: Repository<District>,
  ) {}

  async create(createUserDto: CreateDistrictDto) {
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

  async update(id: number, updateUserDto: UpdateDistrictDto) {
    await this.usersRepository.update(id, updateUserDto);
    return 'Updated';
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    return id;
  }
}
