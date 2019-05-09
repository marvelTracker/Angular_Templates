import { Component, OnInit } from '@angular/core';



export interface Hero {
  id: number;
  name: string;
}

export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html'
})


export class ProductListComponent implements OnInit {
title:string;
heroes:Hero[];

  ngOnInit(): void {
    console.log('Hero list' + HEROES[0].name);
    this.title = 'Product List';
    this.heroes = HEROES;
  }

}
