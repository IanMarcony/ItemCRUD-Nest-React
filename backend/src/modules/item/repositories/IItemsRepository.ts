import Item from 'src/modules/item/model/item.entity';
import ICreateItemDTO from '../dtos/ICreateItemDTO';

export default interface IItemsRepository {
  findAll(): Promise<Item[]>;
  findById(id: string): Promise<Item | undefined>;
  create(item: ICreateItemDTO): Promise<Item>;
}
