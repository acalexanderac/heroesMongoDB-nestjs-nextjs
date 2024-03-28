import { Module } from '@nestjs/common';
import { HeroInformationsService } from './hero_informations.service';
import { HeroInformationsController } from './hero_informations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hero, HeroSchema } from './schemas/hero_informations.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }]),
  ],
  controllers: [HeroInformationsController],
  providers: [HeroInformationsService],
})
export class HeroInformationsModule {}
