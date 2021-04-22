import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';


import { Router } from '@angular/router';
import { PokemonsService } from '../service/pokemons.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  pokemons: Pokemon[] = [];


  constructor(private router: Router, private pokemonsService: PokemonsService, private titleService: Title) {

  }


  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.titleService.setTitle('Liste des pokémons');
    this.pokemonsService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon): void {
    const link = ['/pokemon', pokemon.id]
    this.router.navigate(link);
  }

}