import { Controller, Get, Param } from '@nestjs/common';
import { AlignmentsService } from './alignments.service';

@Controller('alignments')
export class AlignmentsController {
  constructor(private readonly alignmentsService: AlignmentsService) {}

  @Get()
  findAll() {
    return this.alignmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alignmentsService.findOne(id);
  }
}
