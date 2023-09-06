import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log, Model } from './model';

@Injectable()
export class PostgreDataServices implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Log)
    public logRepository: Repository<Log>,
    @InjectRepository(Model)
    public modelRepository: Repository<Model>,
  ) {}

  async onApplicationBootstrap() {}
}
