import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ModelDocument = Model & Document;

@Schema()
export class Model {
  @Prop({ required: true, unique: true })
  id: number;
}

export const ModelSchema = SchemaFactory.createForClass(Model);
