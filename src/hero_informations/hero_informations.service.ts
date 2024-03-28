import { Injectable } from '@nestjs/common';
import { CreateHeroInformationDto } from './dto/create-hero_information.dto';
import { UpdateHeroInformationDto } from './dto/update-hero_information.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Hero } from './schemas/hero_informations.schema';
import { Model } from 'mongoose';
@Injectable()
export class HeroInformationsService {
  constructor(@InjectModel(Hero.name) private heroModel: Model<Hero>) {}

  async create(createHeroInformationDto: CreateHeroInformationDto) {
    const createdHero = new this.heroModel(createHeroInformationDto);
    return await createdHero.save();
  }

  async findAll() {
    return await this.heroModel.find().exec();
  }

  async findOne(id: string) {
    return await this.heroModel.findById(id).exec();
  }
  async update(id: string, updateHeroInformationDto: UpdateHeroInformationDto) {
    return await this.heroModel
      .findByIdAndUpdate(id, updateHeroInformationDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.heroModel.findByIdAndDelete(id).exec();
  }
}
