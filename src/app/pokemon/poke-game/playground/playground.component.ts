import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @Input() yourPoke: any[];
  @Input() compPoke: any[];
  public player1HP: any; 
  public player2HP: any; 

  constructor() { }

  ngOnInit() {
    console.log(this.yourPoke,this.compPoke);
    this.player1HP = (Math.floor((this.yourPoke.base.HP/this.yourPoke.base.HP)*100));
    this.player2HP = (Math.floor((this.compPoke.base.HP/this.compPoke.base.HP) *100));
    console.log('oninit',this.player2HP)
  }

  attack1= ()=>{
    let attackPower = Math.floor((this.yourPoke.base.Attack/4));
    this.player2HP = this.player2HP - attackPower;
    if(this.player2HP  < 0 ){
      this.player2HP = 0;
    }
  }
  attack2 =() =>{
    let attackPower = this.yourPoke.base.Attack - Math.floor((this.yourPoke.base.Attack/4));
    this.player2HP = this.player2HP - attackPower;
    if(this.player2HP  < 0 ){
      this.player2HP = 0;
    }
  }

}
