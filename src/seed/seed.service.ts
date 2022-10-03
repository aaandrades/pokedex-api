import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { HttpService } from '../common/services/http/http.service';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(private httpService: HttpService) {}

  async executeSeed(): Promise<CreatePokemonDto[]> {
    const { results } = await this.httpService.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const mappedResults = results.map(({ name, url }) => {
      const segments = url.split('/');
      const id = +segments[segments.length - 2];
      return { name, no: id };
    });

    return mappedResults;
  }
}
