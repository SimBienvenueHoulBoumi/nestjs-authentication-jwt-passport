import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(auth: AuthDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(auth.username);
    if (user?.password !== auth.password) {
      throw new UnauthorizedException();
    }

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(auth: AuthDto): Promise<{ result: string }> {
    if (await this.usersService.findOne(auth.username)) {
      throw new UnauthorizedException();
    }
    await this.usersService.create(auth.username, auth.password);
    return {
      result: 'user created successfully!',
    };
  }
}
