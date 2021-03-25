import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];// Declaration and initialization
 
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getTopHeroes();
  }

  getTopHeroes(): void{ 
    this.heroService.tradeHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
}
