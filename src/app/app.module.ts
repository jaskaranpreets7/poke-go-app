import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokeService } from './pokemon/poke.service';
import { PokeGameComponent } from './pokemon/poke-game/poke-game.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokeGameComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
