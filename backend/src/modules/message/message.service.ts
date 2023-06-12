import { Injectable } from '@nestjs/common';
import { MessageModel } from './message.model';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';

@Injectable()
export class MessageService {
  constructor(@InjectClient() private readonly con: Connection) { }

  async create(newData: MessageModel) {
    return await this.con.query('INSERT INTO `message`(`client_id`, `text`) VALUES(?, ?)', [newData.client_id, newData.text]);
  }


  async findAll() {
    const messages = await this.con.query('SELECT m.*, c.fullname, c.phone, c.address FROM `message` AS m, `client` AS c WHERE m.client_id=c.id ORDER BY m.`date` DESC');
    return messages[0];
  }


  async active() {
    const messages = await this.con.query('SELECT m.*, c.fullname, c.phone, c.address FROM `message` AS m, `client` AS c WHERE m.client_id=c.id AND `status`=0 ORDER BY m.`date` DESC');
    return messages[0];
  }


  async activeByClientId(id: number) {
    const messages = await this.con.query('SELECT m.*, c.fullname, c.phone, c.address FROM `message` AS m, `client` AS c WHERE m.client_id=c.id AND `status`=0 AND c.id=?', id);
    return messages[0];
  }


  async remove(id: number) {
    return await this.con.query('DELETE FROM `message` WHERE id=?', id);
  }
}