import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Alignment, AlignmentSchema } from './schemas/alignments.schema';
import { AlignmentsService } from './alignments.service';
import { AlignmentsController } from './alignments.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Alignment.name, schema: AlignmentSchema },
    ]),
  ],
  providers: [AlignmentsService],
  controllers: [AlignmentsController],
})
export class AlignmentsModule {}
