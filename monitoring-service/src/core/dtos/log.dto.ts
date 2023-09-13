import { IsNotEmpty, IsDate } from 'class-validator';
import { HttpStatus } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';

export class CreateLogDto {
  @IsNotEmpty()
  predictionId: number;

  @IsNotEmpty()
  modelId: any;

  @IsNotEmpty()
  status: HttpStatus;

  @IsDate()
  timestamp: Date;

  @IsNotEmpty()
  responseTime: number;
}

export class UpdateLogDto extends PartialType(CreateLogDto) {}
