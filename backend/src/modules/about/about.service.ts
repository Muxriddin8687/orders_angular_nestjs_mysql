import { Injectable } from '@nestjs/common';
import { AboutModel } from './about.model';

@Injectable()
export class AboutService {
  create(newData: AboutModel) {
    return 'This action adds a new about';
  }

  findAll() {
    return `This action returns all about`;
  }

  findOne(id: number) {
    return `This action returns a #${id} about`;
  }

  update(id: number, newData: AboutModel) {
    return `This action updates a #${id} about`;
  }

  remove(id: number) {
    return `This action removes a #${id} about`;
  }
}
