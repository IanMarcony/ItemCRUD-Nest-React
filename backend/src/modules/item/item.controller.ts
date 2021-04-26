import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import Item from 'src/modules/item/model/item.entity';
import ICreateItemDTO from './dtos/ICreateItemDTO';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
  constructor(private service: ItemService) {}

  @Get()
  public async getItems(@Query('id') id: string): Promise<Item[] | Item> {
    if (id) {
      return await this.service.findById(id);
    }
    return await this.service.findAll();
  }

  @Post()
  public async postItem(@Body() item: ICreateItemDTO): Promise<Item> {
    return await this.service.create(item);
  }
}
