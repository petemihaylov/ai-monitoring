import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Model } from './model.model';
import { HttpStatus } from '@nestjs/common';

export type LogDocument = Log & Document;

@Schema()
export class Log {
  @Prop({ required: true, unique: true })
  id: number;
  @Prop()
  predictionId: number;
  @Prop()
  model: Model;
  @Prop()
  status: HttpStatus;
  @Prop()
  timestamp: Date;
  @Prop()
  responseTime: number;
}

export const LogSchema = SchemaFactory.createForClass(Log);
