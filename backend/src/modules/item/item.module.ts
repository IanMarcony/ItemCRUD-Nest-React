import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Item from 'src/modules/item/model/item.entity';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
