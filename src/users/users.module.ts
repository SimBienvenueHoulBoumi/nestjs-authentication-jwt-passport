import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [UsersService],
  providers: [...usersProviders, UsersService],
})
export class UsersModule {}
