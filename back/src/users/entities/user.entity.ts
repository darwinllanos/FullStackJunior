import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;
}
