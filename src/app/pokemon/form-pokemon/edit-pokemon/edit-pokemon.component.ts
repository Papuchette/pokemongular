import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from '../../pokemon';
import { PokemonsService } from '../../service/pokemons.service';
@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  pokemon?: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService, private titleService: Title) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id).subscribe(pokemon => {
      this.pokemon = pokemon,
      this.titleService.setTitle(`Editer ${pokemon.name}`);
    });
  }

}
