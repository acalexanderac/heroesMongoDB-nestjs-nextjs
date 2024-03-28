import { Injectable } from '@nestjs/common';
import { CreateHeroInformationDto } from './dto/create-hero_information.dto';
import { UpdateHeroInformationDto } from './dto/update-hero_information.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Hero } from './schemas/hero_informations.schema';
import { Model } from 'mongoose';

export interface SearchCriteria {
  publisher_id?: number;
  race?: string;
  gender_id?: number;
  alignment_id?: number;
}

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

  async searchHeroes(criteria: SearchCriteria): Promise<Hero[]> {
    const searchCriteria: any = {};

    if (criteria.publisher_id) {
      searchCriteria.publisher_id = criteria.publisher_id;
    }

    if (criteria.race) {
      searchCriteria.race = new RegExp(criteria.race, 'i');
    }

    if (criteria.gender_id) {
      searchCriteria.gender_id = criteria.gender_id;
    }

    if (criteria.alignment_id) {
      searchCriteria.alignment_id = criteria.alignment_id;
    }

    return this.heroModel.find(searchCriteria).exec();
  }
}
