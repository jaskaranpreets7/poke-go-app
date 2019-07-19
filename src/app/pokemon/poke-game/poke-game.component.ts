import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';

@Component({
  selector: 'app-poke-game',
  templateUrl: './poke-game.component.html',
  styleUrls: ['./poke-game.component.css']
})
export class PokeGameComponent implements OnInit {
  pokemons: any;
  filterList: any;
  compList: any;
  showDetails: boolean ;

  constructor(private pokeservice: PokeService) { }

  ngOnInit() {
    this.pokemons = this.pokeservice.getData();
  }

  selectedPoke = (details: any) => {
    if (details === '0' ) {
      this.showDetails = false;
    } else {
      this.showDetails = true;
      for (let i = 0; i < this.pokemons.length ; i++ ) {
        if (this.pokemons[i].id === +details) {
          this.filterList = this.pokemons[i];
        }
      }
    }
    setTimeout(this.randomSelect(), 3000);
  }

  randomSelect = () => {
    const randomNum = Math.floor(Math.random() * 20) + 1;
    this.compList = this.pokemons[randomNum];
  }
}
