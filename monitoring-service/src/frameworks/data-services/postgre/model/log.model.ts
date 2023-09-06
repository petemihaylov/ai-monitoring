import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { HttpStatus } from '@nestjs/common';
import { Model } from './model.model'

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modelId: number;

  @Column()
  predictionId: number;

  @ManyToOne(() => Model, (model) => model.logs)
  model: Model;

  @Column()
  status: HttpStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
  
  @Column()
  responseTime: number;
}


