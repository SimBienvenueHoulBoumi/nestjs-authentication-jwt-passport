import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  async create(username: string, password: string): Promise<User> {
    const newUser = this.usersRepository.create({
      username,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.usersRepository.save(newUser);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: { username },
    });
  }
}
