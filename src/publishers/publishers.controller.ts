import { Controller, Get, Query, Param } from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('publishers')
@Controller('publishers')
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}

  @Get()
  findAll() {
    return this.publishersService.findAll();
  }

  @Get('search')
  search(@Query('term') term: string) {
    return this.publishersService.searchPublishers(term);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publishersService.findOne(id);
  }
}
