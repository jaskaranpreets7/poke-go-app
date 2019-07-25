import { Component, OnInit, Input} from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
  // animations:[
  //   trigger('imgShake', [
  //     state('normal' , style({
  //       'transform':'scale(1)',
  //     })),
  //     state('shakeend', style({
  //       transform: 'scale(1)',
  //       backgroundColor:'red'
  //     })),
  //     transition('* <=> shakeend', animate('6000s ease-out', keyframes([
  //       style({transform: 'translate3d(-1px, 0, 0)', offset: 0.1}),
  //       style({transform: 'translate3d(2px, 0, 0)', offset: 0.2}),
  //       style({transform: 'translate3d(-4px, 0, 0)', offset: 0.3}),
  //       style({transform: 'translate3d(4px, 0, 0)', offset: 0.4}),
  //       style({transform: 'translate3d(-4px, 0, 0)', offset: 0.5}),
  //       style({transform: 'translate3d(4px, 0, 0)', offset: 0.6}),
  //       style({transform: 'translate3d(-4px, 0, 0)', offset: 0.7}),
  //       style({transform: 'translate3d(2px, 0, 0)', offset: 0.8}),
  //       style({transform: 'translate3d(-1px, 0, 0)', offset: 0.9}),
  //     ])))
  //   ])
  // ]
})
export class PlaygroundComponent implements OnInit {

  @Input() yourPoke: any;
  @Input() compPoke: any;

  public state: string = 'normal';
  public player1HP: any;
  public player2HP: any;
  public compAtk: number;
  public youWon: boolean = false;
  public compWon : boolean = false;
  public turn: boolean = false;

  public attacks = { 
    0 : function attack1(self){
      self.compAttack1()
    },
    1 : function attack2(self){
      self.compAttack2()
    }
  }
  constructor() { }

  ngOnInit() {
    this.player1HP = (Math.floor((this.yourPoke.base.HP/this.yourPoke.base.HP)*100));
    this.player2HP = (Math.floor((this.compPoke.base.HP/this.compPoke.base.HP)*100));
  }

  attack1(state:string):void{
    let attackPower = Math.floor((this.yourPoke.base.Attack/4));
    this.player2HP = this.player2HP - attackPower;
    let timeout = setTimeout(()=>{this.computer() },1000);

    this.state = state;
    this.state === 'normal' ? this.state = 'shakeend' : this.state = 'normal';
    this.state === 'shakeend' ? this.state = 'shakeend' : this.state = 'normal';


    if(this.player2HP  < 0 ){
      this.player2HP = 0;
      setTimeout(()=>{this.youWon = true;},700);  
      clearTimeout(timeout)
    }
    this.turn = !this.turn;

  }

  attack2(state:string):void{
    let attackPower = this.yourPoke.base.Attack - Math.floor((this.yourPoke.base.Attack/4));
    this.player2HP = this.player2HP - attackPower;
    let timeout = setTimeout(()=>{this.computer()},1000);
    this.state === 'normal' ? this.state = 'shakeend' : this.state = 'normal';

    if(this.player2HP  < 0 ){
      this.player2HP = 0;
      setTimeout(()=>{this.youWon = true;},700);
      clearTimeout(timeout)
    }
    this.turn = !this.turn;

  }

  computer():void{
    this.compAtk = Math.floor(Math.random()*2);
    this.attacks[this.compAtk](this);
    this.turn = !this.turn;
  }

  compAttack1():void{
    let attackPower = Math.floor((this.compPoke.base.Attack/4));
    this.player1HP = this.player1HP - attackPower;
    if(this.player1HP  < 0 ){
      this.player1HP = 0;
      setTimeout(()=>{this.compWon = true;},700)
    }

  }

  compAttack2():void{
    let attackPower = this.compPoke.base.Attack - Math.floor((this.compPoke.base.Attack/4));
    this.player1HP = this.player1HP - attackPower;
    if(this.player1HP  < 0 ){
      this.player1HP = 0;
      setTimeout(()=>{this.compWon = true;},700)
    }

  }
}
