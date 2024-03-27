import { Injectable } from '@nestjs/common';
import { CreateHeroInformationDto } from './dto/create-hero_information.dto';
import { UpdateHeroInformationDto } from './dto/update-hero_information.dto';

@Injectable()
export class HeroInformationsService {
  create(createHeroInformationDto: CreateHeroInformationDto) {
    return 'This action adds a new heroInformation';
  }

  findAll() {
    return `This action returns all heroInformations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} heroInformation`;
  }

  update(id: number, updateHeroInformationDto: UpdateHeroInformationDto) {
    return `This action updates a #${id} heroInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} heroInformation`;
  }
}
