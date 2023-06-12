import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactModel } from './contact.model';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() createContactDto: ContactModel) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

}
