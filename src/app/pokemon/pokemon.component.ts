import { Component, OnInit } from '@angular/core';
import { PokeService } from './poke.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public poke: any;
  public maxPages : any= {};
  public filterList : any;

  constructor( private pokeservice: PokeService) { }

  ngOnInit() {
    this.poke = this.pokeservice.getData();

    this.filterList = this.poke.filter((a)=>{
      return (a.id >= 1 && a.id <= 10)
    })

    let len = Math.ceil(this.poke.length/10);
    for(let i = 1; i<=len; i++){
      if(this.maxPages[i]){
        this.maxPages[i]++;
      }else{
        this.maxPages[i]=1;
      }
    }
    this.maxPages = Object.keys(this.maxPages)
  }

  pokeList(value):void{
    let rangeFrom = value * 10 - 10 ;
    let rangeTo = value * 10 ;
    this.filterList = this.poke.filter((a)=>{
      return (a.id > rangeFrom && a.id <= rangeTo)
    })

    this.topFunction()
  }

  topFunction():void{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
