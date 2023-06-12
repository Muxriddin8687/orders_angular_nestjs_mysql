import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';
import { DelivererModel } from './deliverer.model';

@Injectable()
export class DelivererService {
    constructor(@InjectClient() private readonly con: Connection) { }


    async create(newData: DelivererModel) {
        return this.con
            .query('INSERT `deliverer`(`fullname`, `phone`, `address`, `passport_seria`, `birthday`) VALUES (?, ?, ?, ?, ?)',
                [newData.fullname, newData.phone, newData.address, newData.passport_seria, newData.birthday]);
    }


    async findAll() {
        const data = await this.con.query('SELECT * FROM `deliverer`');
        return data[0];
    }


    async findOne(id: number) {
        const data = await this.con.query('SELECT * FROM `deliverer` WHERE `id`=?', id);
        return data[0];
    }


    async update(id: number, data: DelivererModel) {
        return await this.con
            .query('UPDATE `deliverer` SET `fullname`=?, `phone`=?, `address`=?, `passport_seria`=?, `birthday`=? WHERE id=?',
                [data.fullname, data.phone, data.address, data.passport_seria, data.birthday, id]);
    }


    async remove(id: number) {
        return await this.con.query('DELETE FROM `deliverer` WHERE `id`=?', id);
    }
}
