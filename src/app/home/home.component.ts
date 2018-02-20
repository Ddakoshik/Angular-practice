import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'Igor'
  };

  constructor() { }

  ngOnInit() {
  }



onSelect(hero: Hero): void {
  this.selectedHero = hero;
  console.log(this.selectedHero);
}

}
