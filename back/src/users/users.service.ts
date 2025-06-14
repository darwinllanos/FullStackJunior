import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = createUserDto;
    const addUser = this.userRepository.save(user);
    return addUser;
  }

  findAll() {
    const GetallUser = this.userRepository.find();
    return GetallUser;
  }

  findOne(id: string) {
    const findUserById = this.userRepository.findOne({ where: { id } });
    return findUserById;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
