import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';
import { OrderModel } from './order.model';

@Injectable()
export class OrderService {
    constructor(@InjectClient() private readonly con: Connection) { }


    async create(newData: OrderModel) {
        this.con.query("UPDATE `message` SET `status`='1' WHERE id=?", newData.message_id);

        return this.con
            .query('INSERT `order`(`from`, `to`, `goods`, `summ`, `message_id`, `deliverer_id`) VALUES (?, ?, ?, ?, ?, ?)',
                [newData.from, newData.to, newData.goods, newData.summ, newData.message_id, newData.deliverer_id]);
    }


    async changeStatus(id: number, status: number) {
        if (status != 3)
            return await this.con.query('UPDATE `order` SET `status`=? WHERE id=?', [status, id]);
        else
            return await this.con.query('UPDATE `order` SET `status`=?, `delivered_date`=NOW() WHERE id=?', [status, id]);
    }


    async findAll() {
        let sql = 'SELECT * FROM `orders`';

        const data = await this.con.query(sql);
        return data[0];
    }


    async findArchive() {
        let sql = 'SELECT * FROM `orders` WHERE status = 4';

        const data = await this.con.query(sql);
        return data[0];
    }


    async getByFilter(filterData: any) {

        // let filterData = {
        //     start_date: '',
        //     end_date: '',
        //     deliverer_id: 0
        // };

        let start_date = '', end_date = '', deliverer_id = '', status = 'status = 4';


        if (filterData.start_date != null) {
            start_date = `create_date >= '${filterData.start_date}'`;
        }
        if (filterData.end_date != null) {
            end_date = (start_date.length > 3) ? ' AND ' : '';
            end_date += `create_date <= '${filterData.end_date}'`;
        }
        if (filterData.deliverer_id != null && filterData.deliverer_id.length > 0) {
            deliverer_id = (start_date.length > 3 || end_date.length > 3) ? ' AND ' : '';
            deliverer_id += 'deliverer_id=' + filterData.deliverer_id;
        }
        if (start_date.length > 3 || end_date.length > 3 || deliverer_id.length > 3) {
            status += ' AND ';
        }


        let sql = `SELECT * FROM orders WHERE ${status + start_date + end_date + deliverer_id}`;

        const data = await this.con.query(sql);
        return data[0];
    }



    async findActive() {
        let sql = 'SELECT * FROM `orders` WHERE status < 4';

        const data = await this.con.query(sql);
        return data[0];
    }


    async findOne(id: number) {
        let sql = 'SELECT * FROM `orders` WHERE id=?';

        const data = await this.con.query(sql, id);
        return data[0];
    }


    async findByClientId(id: number) {
        let sql = 'SELECT * FROM `orders` WHERE client_id=?';

        const data = await this.con.query(sql, id);
        return data[0];
    }


    async findByDelivererId(id: number) {
        let sql = 'SELECT * FROM `orders` WHERE deliverer_id=?';

        const data = await this.con.query(sql, id);
        return data[0];
    }


    async update(id: number, data: OrderModel) {
        return await this.con
            .query('UPDATE `order` SET `from`=?, `to`=?, `summ`=?, `goods`=?, `deliverer_id`=? WHERE id=?',
                [data.from, data.to, data.summ, data.goods, data.deliverer_id, id]);
    }


    async remove(id: number) {
        this.con.query("UPDATE `message` SET `status`='0' WHERE id=(SELECT `message_id` FROM `order` WHERE id=?)", id);

        return await this.con.query('DELETE FROM `order` WHERE `id`=?', id);
    }
}

