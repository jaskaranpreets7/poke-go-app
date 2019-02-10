import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeGameComponent } from './poke-game.component';

describe('PokeGameComponent', () => {
  let component: PokeGameComponent;
  let fixture: ComponentFixture<PokeGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
