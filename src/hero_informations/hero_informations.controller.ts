import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HeroInformationsService } from './hero_informations.service';
import { CreateHeroInformationDto } from './dto/create-hero_information.dto';
import { UpdateHeroInformationDto } from './dto/update-hero_information.dto';

@Controller('hero-informations')
export class HeroInformationsController {
  constructor(
    private readonly heroInformationsService: HeroInformationsService,
  ) {}

  @Post()
  create(@Body() createHeroInformationDto: CreateHeroInformationDto) {
    return this.heroInformationsService.create(createHeroInformationDto);
  }

  @Get()
  findAll() {
    return this.heroInformationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heroInformationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHeroInformationDto: UpdateHeroInformationDto,
  ) {
    return this.heroInformationsService.update(id, updateHeroInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heroInformationsService.remove(id);
  }
}
