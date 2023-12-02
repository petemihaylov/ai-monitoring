import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HttpStatus } from '@nestjs/common';
import mongoose from 'mongoose';
import { Model } from './model.model';

export type LogDocument = Log & Document;

@Schema()
export class Log {
  @Prop()
  predictionId: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Model', required: true })
  model: Model;

  @Prop()
  status: HttpStatus;

  @Prop()
  timestamp: Date;

  @Prop()
  responseTime: number;
}

export const LogSchema = SchemaFactory.createForClass(Log);
