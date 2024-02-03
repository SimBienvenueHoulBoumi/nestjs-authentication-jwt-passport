import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({
    description: 'The username of the user',
    default: 'username',
  })
  username: string;

  @ApiProperty({
    description: 'The password of the user',
    default: 'password',
  })
  password: string;
}
