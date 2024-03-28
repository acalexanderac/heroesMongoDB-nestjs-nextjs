import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Publisher, Publishersschema } from './schemas/publishers.schema';
import { PublishersService } from './publishers.service';
import { PublishersController } from './publishers.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Publisher.name, schema: Publishersschema },
    ]),
  ],
  providers: [PublishersService],
  controllers: [PublishersController],
})
export class PublishersModule {}
