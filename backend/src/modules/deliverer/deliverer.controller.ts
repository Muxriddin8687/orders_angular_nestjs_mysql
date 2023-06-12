import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DelivererService } from './deliverer.service';
import { DelivererModel } from './deliverer.model';

@Controller('deliverer')
export class DelivererController {
  constructor(private readonly delivererService: DelivererService) {}

  @Post()
  create(@Body() newData: DelivererModel) {
    return this.delivererService.create(newData);
  }


  @Get()
  findAll() {
    return this.delivererService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.delivererService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() newData: DelivererModel) {
    return this.delivererService.update(+id, newData);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.delivererService.remove(+id);
  }
}
