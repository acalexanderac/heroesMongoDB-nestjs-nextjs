import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroInformationsModule } from './hero_informations/hero_informations.module';
import { AlignmentsModule } from './alignments/alignments.module';
import { GendersModule } from './genders/genders.module';
import { PublishersModule } from './publishers/publishers.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ubiquo:55O85Wh%40b6%401GTQO%24%24XbO9@atlascluster.1jpotvm.mongodb.net/heroes',
    ),
    HeroInformationsModule,
    AlignmentsModule,
    GendersModule,
    PublishersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
