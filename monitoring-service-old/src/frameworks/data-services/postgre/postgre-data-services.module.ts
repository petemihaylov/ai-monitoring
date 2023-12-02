import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATA_BASE_CONFIGURATION } from '../../../configuration';
import { Log, Model } from 'src/core/entities';
import { PostgreDataServices } from './postgre-data-services.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // DATA_BASE_CONFIGURATION
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'postgres-db',
      entities: [Log, Model],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([Log, Model]),
  ],
  providers: [PostgreDataServices],
  exports: [],
})
export class PostgreDataServicesModule {}
