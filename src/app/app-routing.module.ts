import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PokemonComponent} from './pokemon/pokemon.component';
import { PokeGameComponent } from './pokemon/poke-game/poke-game.component';


const routes: Routes = [
  { path: '', redirectTo:'poke', pathMatch:'full'},
  { path: 'poke', component: PokemonComponent},
  { path: 'poke-game', component: PokeGameComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]

})
export class AppRoutingModule { }
