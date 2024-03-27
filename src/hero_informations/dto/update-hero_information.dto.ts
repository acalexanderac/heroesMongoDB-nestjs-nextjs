import { PartialType } from '@nestjs/mapped-types';
import { CreateHeroInformationDto } from './create-hero_information.dto';

export class UpdateHeroInformationDto extends PartialType(CreateHeroInformationDto) {}
