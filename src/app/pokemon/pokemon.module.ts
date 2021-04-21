import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { FormsModule } from '@angular/forms';

import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { FormPokemonComponent } from './form-pokemon/form-pokemon.component';
import { BorderCardDirective } from './directive/border-card.directive';
import { PokemonTypeColorPipe } from './pipe/pokemon-type-color.pipe';
import { PokemonsService } from './service/pokemons.service';
import { EditPokemonComponent } from './form-pokemon/edit-pokemon/edit-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from '../loader/loader.component';

import { AuthGuardService } from './service/auth-guard.service';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component'
import { AuthService } from './service/auth.service';




@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailsPokemonComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    FormPokemonComponent,
    LoaderComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [PokemonsService, AuthGuardService, AuthService]
})
export class PokemonModule { }
