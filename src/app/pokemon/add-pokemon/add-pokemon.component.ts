import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {

  pokemon?: Pokemon;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Ajouter un pokémon');
    this.pokemon = new Pokemon();
  }

}
