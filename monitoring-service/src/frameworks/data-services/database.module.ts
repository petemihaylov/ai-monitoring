import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Log } from 'src/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [Log, Model],
    }),
    TypeOrmModule.forFeature([Log, Model]),
  ],
  exports: [TypeOrmModule, TypeOrmModule.forFeature([Log, Model])],
})
export class DatabaseModule {}
