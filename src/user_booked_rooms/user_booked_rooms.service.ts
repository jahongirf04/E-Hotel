import { Injectable } from '@nestjs/common';
import { CreateUserBookedRoomDto } from './dto/create-user_booked_room.dto';
import { UpdateUserBookedRoomDto } from './dto/update-user_booked_room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBookedRoom } from './entities/user_booked_room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserBookedRoomsService {
  constructor(
    @InjectRepository(UserBookedRoom)
    private usersRepository: Repository<UserBookedRoom>,
  ) {}

  async create(createUserDto: CreateUserBookedRoomDto) {
    const user = await this.usersRepository.create(createUserDto);
    this.usersRepository.save(user);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.find({relations: {userId: true,roomId:true}});
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id
      },
      relations: {
       userId : true,roomId: true
      },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserBookedRoomDto) {
    await this.usersRepository.update(id, updateUserDto);
    return 'Updated';
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    return id;
  }
}
