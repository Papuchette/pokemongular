import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login/login-routing.module'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    /* Le module httpClientInMemoryWebApiModule intercepte les requêtes HTTP
    et retourne des réponses simulées du serveur.
 
    Retirer l'importation quand un "vrai" serveur est prêt pour recevoir des requêtes.
   */
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    PokemonModule, // L'odre de chargement des modules est très important
    LoginRoutingModule,
    AppRoutingModule // pour l'ordre de déclaration des routes !],
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
