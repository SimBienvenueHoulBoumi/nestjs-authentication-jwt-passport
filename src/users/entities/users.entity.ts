import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  username: string;

  @Column({ length: 500 })
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
