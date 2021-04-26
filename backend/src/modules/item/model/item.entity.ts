import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../shared/infra/typeorm/model/base.entity';

@Entity('items')
export default class Item extends BaseEntity {
  @Column()
  name: string;
  @Column()
  description: string;
}
