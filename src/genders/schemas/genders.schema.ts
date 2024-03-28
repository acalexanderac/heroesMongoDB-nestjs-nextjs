import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'gender' })
export class Gender extends Document {
  @Prop({ required: true })
  gender_id: number;

  @Prop()
  name: string;
}

export const Genderschema = SchemaFactory.createForClass(Gender);
