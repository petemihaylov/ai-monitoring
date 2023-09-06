import { IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateModelDto {
  @IsNotEmpty()
  @ApiProperty()
  id: number;
}

export class UpdateModelDto extends PartialType(CreateModelDto) {}
