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
  public pages : any;
  public maxLen : any;
  public isNextDisable:boolean = false;
  public isPreviousDisable:boolean= true;
  public currentPage: number = 1;

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
    this.maxPages = Object.keys(this.maxPages);
    this.pages = this.maxPages.filter((a)=>{return +a >= 0 && +a <= 3 });
  }

  //Method used to get 10 pokemons 
  pokeList(value):void{
    this.currentPage = value;
    let rangeFrom = value * 10 - 10 ;
    let rangeTo = value * 10 ;
    this.filterList = this.poke.filter((a)=>{
      return (a.id > rangeFrom && a.id <= rangeTo)
    })

    this.topFunction()
  }

  //Scroll top functionw
  topFunction():void{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  onNext():void{
    this.maxLen = this.pages[this.pages.length-1];
    let otherThree = +this.maxLen +3;
    this.pages = this.maxPages.filter((a)=>{return +a > this.maxLen && +a <= otherThree}) ;
    if(this.pages.length === 1){
      this.isNextDisable = true;
    }

    this.isPreviousDisable = false;

  }

  onPrevious():void{
    this.isNextDisable = false;
    this.maxLen = this.pages[this.pages.length-1] ;

    if(this.maxLen === '7'){
      this.maxLen  = +this.maxLen - 1;
      let otherThree = +this.maxLen - 2;
      this.pages = this.maxPages.filter((a)=>{return +a >= otherThree && +a <= this.maxLen});
    }else{
      this.maxLen  = +this.maxLen - 3;
      let otherThree = +this.maxLen - 2;
      this.pages = this.maxPages.filter((a)=>{return +a >= otherThree && +a <= this.maxLen});
      if(this.pages[0] === '1'){
        this.isPreviousDisable = true;
      }
    }
   
  }
}

