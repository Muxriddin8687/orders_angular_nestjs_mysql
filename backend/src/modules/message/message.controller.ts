import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageModel } from './message.model';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() createMessageDto: MessageModel) {
    return this.messageService.create(createMessageDto);
  }


  @Get('active')
  findActive() {
    return this.messageService.active();
  }


  @Get('client/:id')
  findActiveByClientId(@Param('id') id: string) {
    return this.messageService.activeByClientId(+id);
  }


  @Get()
  findAll() {
    return this.messageService.findAll();
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(+id);
  }
}
