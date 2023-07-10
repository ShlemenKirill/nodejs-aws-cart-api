import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';

@Entity({ name: 'carts' })
export class UserEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ name: 'name', type: 'varchar', nullable: true })
  name: string;

  @Column({ name: 'email', type: 'varchar', nullable: true })
  email: string;

  @Column({ name: 'password', type: 'varchar', nullable: true })
  password: string;
}
