import { Controller, Get, Param, Query } from '@nestjs/common';
import { GendersService } from './Genders.service';

@Controller('genders')
export class GendersController {
  constructor(private readonly gendersService: GendersService) {}

  @Get()
  findAll() {
    return this.gendersService.findAll();
  }

  @Get('search')
  search(@Query('term') term: string) {
    return this.gendersService.searchGenders(term);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gendersService.findOne(id);
  }
}
