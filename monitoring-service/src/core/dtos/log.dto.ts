import { IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';
import { Model } from '../entities/model.entity';

export class CreateLogDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  predictionId: number;

  @ApiProperty()
  model: Model;

  @IsNotEmpty()
  status: HttpStatus;

  @IsNotEmpty()
  timestamp: Date;

  @IsNotEmpty()
  responseTime: number;
}

export class UpdateLogDto extends PartialType(CreateLogDto) {}
