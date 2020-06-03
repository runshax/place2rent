import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'customers', synchronize: false })
export class Customers extends BaseEntity {
  
  @PrimaryColumn({ name: 'id' }) id: number;

  @Column({ name: 'first_name' }) firstName: string;

  @Column({ name: 'last_name' }) lastName: string;

}

