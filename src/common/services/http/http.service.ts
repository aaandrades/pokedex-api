import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HttpService {
  async get<T>(url: string) {
    const { data } = await axios.get<T>(url);
    return data;
  }
}
