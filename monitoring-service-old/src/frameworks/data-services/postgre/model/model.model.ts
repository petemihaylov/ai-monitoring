import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Log } from './log.model';

@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  name: string;

  @OneToMany(() => Log, (log) => log.model)
  logs: Log[];
}
