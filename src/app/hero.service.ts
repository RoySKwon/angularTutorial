import { Injectable } from '@angular/core'; //Service 특징
import { Observable, of } from 'rxjs';

import { Hero } from './hero';// Interface
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  //MessageService DI
  constructor(private messageService: MessageService) { }

  //Sync, Return 이 바로 된다.
  /* 
  tradeHeroes(): Hero[]{
    return HEROES;

  }
 */ 

  //Async RxJS of()
  tradeHeroes(): Observable<Hero[]>{
    //Data 받아오고, Message 보내고
    this.messageService.addMessage(`HeroService: fetched heroes`);
    return of(HEROES);
  }
  
  getHeroe(id: number): Observable<Hero>{
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
