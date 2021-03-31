import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { HEROES } from '../mock-heroes';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  //1.String type
  // hero = "Marbel";

  //2.Object type
 /*
 hero: Hero ={
    id: 1,
    name: "Windowser"
  } 
*/

  //3.mock Array
  // heroes = HEROES;//html에서 리스트 만들때 사용

  //4.hero Service
  heroes: Hero[];

  // selectedHero: Hero;

  // constructor( private heroService: HeroService, private messageService: MessageService ) { 
  constructor( private heroService: HeroService) { 
    console.log("app-heroes: constructor");
    // this.getHeroes();// 않좋은 구조 BAD
  }
  
  ngOnInit(): void {
    console.log("app-heroes: ngOnInit");
    this.getHeroes();// 좋은 구조 GOOD
  }

  // Heroes list 받아오는 Method
  getHeroes(): void{
    //Sync, 바로 Hero[] 타입을 받아온다.
    // this.heroes = this.heroService.tradeHeroes();
  
    //Async , Observable<Hero[]> 타입을 받아온다
    this.heroService.tradeHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void{
    name = name.trim();
    
    if(!name){
      return ;
    }
  
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  
/*   
  private checklog(hero){
    console.log(`I'm hier:${hero.name} `);
  }
 */

}
