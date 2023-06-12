import { Module } from '@nestjs/common';
import { MysqlModule } from 'nest-mysql';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MulterModule } from '@nestjs/platform-express/multer';
import { memoryStorage } from 'multer';
import { ConfigModule } from '@nestjs/config';

import { getEnvPath } from './core/envs/env.helpers';
import { AuthModule } from './modules/auth/auth.module';
import { ClientModule } from './modules/client/client.module';
import { OrderModule } from './modules/order/order.module';
import { DelivererModule } from './modules/deliverer/deliverer.module';
import { ContactModule } from './modules/contact/contact.module';
import { MessageModule } from './modules/message/message.module';
import { AboutModule } from './modules/about/about.module';
const envFilePath: string = getEnvPath('./src/core/envs');

@Module({
  imports: [
    MysqlModule.forRoot({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      database: 'order',
      multipleStatements: true
    }),
    ConfigModule.forRoot({ envFilePath: envFilePath, isGlobal: true }),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    AuthModule,
    ClientModule,
    OrderModule,
    DelivererModule,
    ContactModule,
    MessageModule,
    AboutModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
