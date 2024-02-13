import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private usersRepository: Repository<Image>,
  ) {}

  async create(createUserDto: CreateImageDto) {
    try {
    const user = await this.usersRepository.create(createUserDto);
    this.usersRepository.save(user);
    return user;
    } catch(e){
      throw new BadRequestException(e.message);
    }
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
        hotelId: true,
      },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateImageDto) {
    await this.usersRepository.update(id, updateUserDto);
    return 'Updated';
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    return id;
  }
}
