import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { HeroInformationsService } from './hero_informations.service';
import { CreateHeroInformationDto } from './dto/create-hero_information.dto';
import { UpdateHeroInformationDto } from './dto/update-hero_information.dto';
import { SearchCriteria } from './hero_informations.service';
import { ApiBadRequestResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('hero-informations')
@Controller('hero-informations')
export class HeroInformationsController {
  constructor(
    private readonly heroInformationsService: HeroInformationsService,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createHeroInformationDto: CreateHeroInformationDto) {
    return this.heroInformationsService.create(createHeroInformationDto);
  }

  @Get()
  findAll() {
    return this.heroInformationsService.findAll();
  }

  @Get('search')
  search(@Query() criteria: SearchCriteria) {
    return this.heroInformationsService.searchHeroes(criteria);
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
