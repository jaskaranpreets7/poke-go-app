import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import * as data from '../../MockData/pokedex.json';
const pokeData = <any>data;


@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: Http ) { }

  getData() {
    return pokeData.default;
  }
}
