import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroInformationsModule } from './hero_informations/hero_informations.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ubiquo:55O85Wh%40b6%401GTQO%24%24XbO9@atlascluster.1jpotvm.mongodb.net/heroes',
    ),
    HeroInformationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
