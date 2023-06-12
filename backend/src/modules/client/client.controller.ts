import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientModel } from './client.model';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) { }


  @Post()
  create(@Body() createMessageDto: ClientModel) {
    return this.clientService.create(createMessageDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }


  @Get()
  findAll() {
    return this.clientService.findAll();
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
