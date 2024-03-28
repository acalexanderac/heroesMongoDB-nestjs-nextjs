import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Alignment } from './schemas/alignments.schema';

@Injectable()
export class AlignmentsService {
  constructor(
    @InjectModel(Alignment.name) private alignmentModel: Model<Alignment>,
  ) {}

  findAll() {
    return this.alignmentModel.find().exec();
  }

  findOne(id: string) {
    return this.alignmentModel.findById(id).exec();
  }
}
