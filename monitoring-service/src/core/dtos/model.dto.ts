import { IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateModelDto {
  @IsNotEmpty()
  name: string;
}

export class UpdateModelDto extends PartialType(CreateModelDto) {}
