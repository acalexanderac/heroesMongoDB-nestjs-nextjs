import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'hero_information' })
export class Hero extends Document {
  @Prop({ required: true })
  hero_id: number;

  @Prop()
  name: string;

  @Prop()
  eye_color: string;

  @Prop()
  hair_color: string;

  @Prop()
  skin_color: string;

  @Prop()
  height: number;

  @Prop()
  weight: number;

  @Prop()
  race: string;

  @Prop()
  publisher_id: number;

  @Prop()
  gender_id: number;

  @Prop()
  alignment_id: number;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);
