import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @Min(1)
  @IsNumber()
  @Transform(({ value }) => +value)
  limit?: number;

  @IsPositive()
  @IsOptional()
  @Transform(({ value }) => +value)
  offset?: number;
}
