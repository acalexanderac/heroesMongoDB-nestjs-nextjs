import { Module } from '@nestjs/common';
import { HeroInformationsService } from './hero_informations.service';
import { HeroInformationsController } from './hero_informations.controller';

@Module({
  controllers: [HeroInformationsController],
  providers: [HeroInformationsService],
})
export class HeroInformationsModule {}
