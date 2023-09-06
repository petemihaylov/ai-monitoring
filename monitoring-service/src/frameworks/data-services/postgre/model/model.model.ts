import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Log } from './log.model';

@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Log, (log) => log.model)
  logs: Log[];
}
