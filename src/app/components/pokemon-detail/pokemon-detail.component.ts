import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  //Variables para almacenar info del pokémon
  pokemon: any = '';
  pkAbility = [];
  pkImg = '';
  pkDescription = '';

  constructor(private pkService: PokemonService, private activatedRouter: ActivatedRoute) { //Para obtener la URL
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    );
  }

  ngOnInit(): void {
  }

  //Función para obtener la información del pokémon elegido a partir de sus ID
  getPokemon(id: number){
    this.pkService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pkImg = this.pokemon.sprites.front_default;
        this.pkAbility = res.abilities;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
