import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Item from 'src/modules/item/model/item.entity';
import { Repository } from 'typeorm';
import ICreateItemDTO from './dtos/ICreateItemDTO';
import IItemsRepository from './repositories/IItemsRepository';

@Injectable()
export class ItemService implements IItemsRepository {
  constructor(
    @InjectRepository(Item)
    private readonly ormRepository: Repository<Item>,
  ) {}
  public async findById(id: string): Promise<Item | undefined> {
    const item = this.ormRepository.findOne({ where: { id } });
    if (!item) {
      throw new Error('Item selected does not exist!');
    }

    return item;
  }
  public async create({ name, description }: ICreateItemDTO): Promise<Item> {
    const item = this.ormRepository.create({
      name,
      description,
    });

    await this.ormRepository.save(item);

    return item;
  }
  public async findAll(): Promise<Item[]> {
    return await this.ormRepository.find();
  }
}
