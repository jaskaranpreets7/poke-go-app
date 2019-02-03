import { Component, OnInit } from '@angular/core';
import { PokeService } from './poke.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  poke: any;

  constructor( private pokeservice: PokeService) { }

  ngOnInit() {
    this.poke = this.pokeservice.getData();
    console.log(this.poke);
  }




}
