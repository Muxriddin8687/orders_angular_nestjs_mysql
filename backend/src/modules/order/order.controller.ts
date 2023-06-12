import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderModel } from './order.model';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  create(@Body() newData: OrderModel) {
    return this.orderService.create(newData);
  }


  @Post('changeStatus')
  changeStatus(@Body() data: OrderModel) {
    return this.orderService.changeStatus(data.id, data.status);
  }


  @Post('filter')
  getByFilter(@Body() filterData: any) {
    return this.orderService.getByFilter(filterData);
  }


  @Get('active')
  findActive() {
    return this.orderService.findActive();
  }


  @Get('archive')
  findArchive() {
    return this.orderService.findArchive();
  }


  @Get()
  findAll() {
    return this.orderService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }


  @Get('client/:id')
  findByClientId(@Param('id') id: string) {
    return this.orderService.findByClientId(+id);
  }


  @Get('deliverer/:id')
  findByDelivererId(@Param('id') id: string) {
    return this.orderService.findByDelivererId(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() newData: OrderModel) {
    return this.orderService.update(+id, newData);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
