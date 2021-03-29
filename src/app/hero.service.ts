import { Injectable } from '@angular/core'; //Service 특징
import { Observable, of } from 'rxjs';

import { Hero } from './hero';// Interface
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesUrl = 'api/heroes'; // Web API type, URL 사용

  //httpClient DI
  //MessageService DI
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  //Sync, Return 이 바로 된다.
  /* 
  tradeHeroes(): Hero[]{
    return HEROES;
  }
 */ 

  //Async RxJS of()
  /* 
  tradeHeroes(): Observable<Hero[]>{
    //Data 받아오고, Message 보내고
    this.messageService.addMessage(`HeroService: fetched heroes`);
    return of(HEROES);
  }
   */
  
  //RxJS 에서 HttpClient로 변경
  tradeHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHeroe(id: number): Observable<Hero>{
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  
  private log(message: string){
    this.messageService.addMessage('HeroService: ${message}');
  }
}
