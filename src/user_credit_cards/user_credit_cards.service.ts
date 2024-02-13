import { Injectable } from '@nestjs/common';
import { CreateUserCreditCardDto } from './dto/create-user_credit_card.dto';
import { UpdateUserCreditCardDto } from './dto/update-user_credit_card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreditCard } from './entities/user_credit_card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserCreditCardsService {
  constructor(
    @InjectRepository(UserCreditCard)
    private usersRepository: Repository<UserCreditCard>,
  ) {}

  async create(createUserDto: CreateUserCreditCardDto) {
    const user = await this.usersRepository.create(createUserDto);
    this.usersRepository.save(user);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.find({relations: {userId: true}});
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id
      },
      relations: {
       userId : true,
      },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserCreditCardDto) {
    await this.usersRepository.update(id, updateUserDto);
    return 'Updated';
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    return id;
  }
}
