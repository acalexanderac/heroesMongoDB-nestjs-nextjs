import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'publisher' })
export class Publisher extends Document {
  @Prop({ required: true })
  publisher_id: number;

  @Prop()
  name: string;
}

export const Publishersschema = SchemaFactory.createForClass(Publisher);
