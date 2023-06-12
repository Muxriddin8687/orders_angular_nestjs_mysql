import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutModel } from './about.model';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post()
  create(@Body() newData: AboutModel) {
    return this.aboutService.create(newData);
  }

  @Get()
  findAll() {
    return this.aboutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() newData: AboutModel) {
    return this.aboutService.update(+id, newData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutService.remove(+id);
  }
}
