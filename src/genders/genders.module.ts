import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Gender, Genderschema } from './schemas/Genders.schema';
import { GendersService } from './Genders.service';
import { GendersController } from './Genders.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Gender.name, schema: Genderschema }]),
  ],
  providers: [GendersService],
  controllers: [GendersController],
})
export class GendersModule {}
