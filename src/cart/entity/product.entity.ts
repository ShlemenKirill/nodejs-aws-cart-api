import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'decimal' })
  price: number;
}
