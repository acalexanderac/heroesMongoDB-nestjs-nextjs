import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'alignment' })
export class Alignment extends Document {
  @Prop({ required: true })
  alignment_id: number;

  @Prop()
  name: string;
}

export const AlignmentSchema = SchemaFactory.createForClass(Alignment);
