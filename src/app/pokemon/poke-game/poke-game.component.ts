import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';

@Component({
  selector: 'app-poke-game',
  templateUrl: './poke-game.component.html',
  styleUrls: ['./poke-game.component.css']
})
export class PokeGameComponent implements OnInit {
  pokemons: any;
  filterList = [];
  showDetails: boolean ;

  constructor(private pokeservice: PokeService) { }

  ngOnInit() {
    this.pokemons = this.pokeservice.getData();
  }

  selectedPoke(details: any) {
      this.showDetails = true;
    console.log(typeof details);
      for (let i = 0; i < this.pokemons.length ; i++ ) {
        if (this.pokemons[i].id == details) {
          this.filterList.push(this.pokemons[i]);
        }
      }console.log(this.filterList);
  }
}
