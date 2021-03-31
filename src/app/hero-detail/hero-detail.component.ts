import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  
  // @Input() hero: Hero;
  hero: Hero;

  constructor(
    private route: ActivatedRoute, //Routing information
    private location: Location, //Browser information
    private heroService: HeroService
    ) { }

  ngOnInit(): void {
    console.log("HeroDetailComponent");
    this.getHeroId();
  }

  getHeroId(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  //Browser Control
  goBack(): void{
    this.location.back();
  }

  //CRUD( Update)
  heroSave(): void{
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
