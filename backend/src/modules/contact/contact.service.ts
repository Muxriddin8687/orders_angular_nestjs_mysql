import { Injectable } from '@nestjs/common';
import { ContactModel } from './contact.model';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';

@Injectable()
export class ContactService {

  constructor(@InjectClient() private readonly con: Connection) { }


  async create(data: ContactModel) {
    let url = this.getUrlFromIframe(data.map);

    const oldData = await this.findAll();

    if(oldData.length == 1)
      return this.con.query('UPDATE `contact` SET `address`=?, `phone1`=?, `phone2`=?, `email1`=?, `email2`=?, `map`=? WHERE id="1"',
        [data.address, data.phone1, data.phone2, data.email1, data.email2, url]);
    else
      return this.con.query('INSERT INTO `contact`(`id`, `address`, `phone1`, `phone2`, `email1`, `email2`, `map`) VALUES(?, ?, ?, ?, ?, ?, ?)',
        ["1", data.address, data.phone1, data.phone2, data.email1, data.email2, url]);
  }


  getUrlFromIframe(text) {
    let str = text;
    let index = str.indexOf('http');

    let url = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (index <= i) {
        if (str[i] == '"') count = 1;
        if (count == 0) url += str[i];
      }
    }

    return url;
  }


  async findAll() {
    const news = await this.con.query('SELECT * FROM `contact` WHERE id="1"');
    return news[0];
  }
}
