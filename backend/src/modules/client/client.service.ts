import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';
import { ClientModel } from './client.model';

@Injectable()
export class ClientService {
    constructor(@InjectClient() private readonly con: Connection) { }


    async create(newData: ClientModel) {
        return await this.con.query('INSERT INTO `client`(`fullname`, `address`, `phone`, `passport_seria`) VALUES(?, ?, ?, ?)',
                        [newData.fullname, newData.address, newData.phone, newData.passport_seria]);
    }


    async findAll() {
        const data = await this.con.query('SELECT * FROM `client` WHERE ORDER BY `date` DESC');
        return data[0];
    }


    async findOne(id: number) {
        const data = await this.con.query('SELECT * FROM `client` WHERE id=?', id);
        return data[0];
    }


    async remove(id: number) {
        return await this.con.query('DELETE FROM `client` WHERE id=?', id);
    }
}
