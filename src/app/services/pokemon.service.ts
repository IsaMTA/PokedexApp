import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemons(index: number){ //Se recibe el id correspondiente a cada pokémon
    return this.http.get<any>(`${this.baseUrl}pokemon/${index}`);
  }
}
