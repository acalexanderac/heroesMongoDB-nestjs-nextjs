import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateHeroInformationDto {
  @IsNumber()
  @IsNotEmpty()
  hero_id: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  eye_color?: string;

  @IsOptional()
  @IsString()
  hair_color?: string;

  @IsOptional()
  @IsString()
  skin_color?: string;

  @IsOptional()
  @IsNumber()
  height?: number;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @IsString()
  race?: string;

  @IsOptional()
  @IsNumber()
  publisher_id?: number;

  @IsOptional()
  @IsNumber()
  gender_id?: number;

  @IsOptional()
  @IsNumber()
  alignment_id?: number;
}
