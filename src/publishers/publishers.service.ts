import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Publisher } from './schemas/publishers.schema';

@Injectable()
export class PublishersService {
  constructor(
    @InjectModel(Publisher.name) private publishersModel: Model<Publisher>,
  ) {}

  findAll() {
    return this.publishersModel.find().exec();
  }

  findOne(id: string) {
    return this.publishersModel.findById(id).exec();
  }

  async searchPublishers(term: string): Promise<Publisher[]> {
    return this.publishersModel
      .find({
        publisher_name: new RegExp(term, 'i'),
      })
      .exec();
  }
}
