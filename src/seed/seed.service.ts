import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from '../pokemon/pokemon.service';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    private httpService: AxiosAdapter,
    private pokemonService: PokemonService,
  ) {}

  async executeSeed(): Promise<CreatePokemonDto[]> {
    try {
      await this.pokemonService.deleteBulk();
      const { results } = await this.httpService.get<PokeResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=650',
      );

      const mappedResults = results.map(({ name, url }) => {
        const segments = url.split('/');
        const id = +segments[segments.length - 2];
        return { name, no: id };
      });

      await this.pokemonService.createBulk(mappedResults);
      return mappedResults;
    } catch (error) {
      console.log(error);
    }
  }
}
