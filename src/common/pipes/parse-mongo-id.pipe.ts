import { Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  /**
   * If the value is not a valid ObjectId, throw a BadRequestException
   * @param {string} value - The value of the parameter.
   * @param _ - Metadata.
   * @returns The value of the parameter.
   */
  transform(value: string, _) {
    if (!isValidObjectId(value))
      throw new BadRequestException(`<${value}> is not a valid id`);
    return value;
  }
}
