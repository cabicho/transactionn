import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';

import {SequelizeModule} from '@nestjs/sequelize';
import {join} from 'path';

@Module({
  imports: [
      TransactionsModule,
      SequelizeModule.forRoot({
        dialect: 'sqlite',
        host: join( __dirname, 'database.sqlite'), //./desafio1/dist/database.sqlite
        // pwd => ./desafio1, sqlite3 dist/database.sqlite => sqlite>
        autoLoadModels: true,
        synchronize: true
      }
      )
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// => go to transactions.module.ts