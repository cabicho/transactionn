import {Table, PrimaryKey, AutoIncrement, Column, Model} from 'sequelize-typescript';

@Table({
    tableName: 'transactions',
})

export class Transaction extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;


    @Column
    account_id: number;

    @Column
    amount: number;
  
     @Column
     created_at: Date;
  
     @Column
     updated_at: Date;
   }
