import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 } from 'uuid';
import { MailService } from '../mail-admin/mail.service';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private usersRepository: Repository<Admin>,
    private mailservice: MailService,
  ) {}

  async create(createUserDto: CreateAdminDto) {
    const user = await this.usersRepository.create(createUserDto);
    // user.ver_link = v4();
    this.usersRepository.save(user);
    // this.mailservice.sendUserConfirmation(user);
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

  async update(id: number, updateUserDto: UpdateAdminDto) {
    await this.usersRepository.update(id, updateUserDto);
    return 'Updated';
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    return id;
  }
}
