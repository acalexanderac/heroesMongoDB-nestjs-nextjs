import { Controller, Get, Param, Query } from '@nestjs/common';
import { AlignmentsService } from './alignments.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('alignments')
@Controller('alignments')
export class AlignmentsController {
  constructor(private readonly alignmentsService: AlignmentsService) {}

  @Get()
  findAll() {
    return this.alignmentsService.findAll();
  }

  @Get('search')
  search(@Query('term') term: string) {
    return this.alignmentsService.searchAlignments(term);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alignmentsService.findOne(id);
  }
}
