import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { EditPokemonComponent } from './form-pokemon/edit-pokemon/edit-pokemon.component';

import { AuthGuardService } from './service/auth-guard.service'
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

// les routes du module Pokémon
const pokemonsRoutes: Routes = [
  {
    path: 'pokemon',
    canActivate: [AuthGuardService],
    children: [
      { path: 'list', component: ListPokemonComponent },
      { path: 'add', component: AddPokemonComponent },
      { path: 'edit/:id', component: EditPokemonComponent },
      { path: ':id', component: DetailsPokemonComponent }
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(pokemonsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule { }
