import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gender } from './schemas/genders.schema';

@Injectable()
export class GendersService {
  constructor(@InjectModel(Gender.name) private genderModel: Model<Gender>) {}

  findAll() {
    return this.genderModel.find().exec();
  }

  findOne(id: string) {
    return this.genderModel.findById(id).exec();
  }

  async searchGenders(term: string): Promise<Gender[]> {
    return this.genderModel
      .find({
        name: new RegExp(term, 'i'),
      })
      .exec();
  }
}
