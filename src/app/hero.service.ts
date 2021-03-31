import { Injectable } from '@angular/core'; //Service 특징
import { Observable, of } from 'rxjs';

import { Hero } from './hero';// Interface
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
// import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
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
      .pipe(
        tap(_ => this.log(`fetched heroes`)),
        catchError(this.handleError<Hero[]>('getHeroes',[]))

      );
  }

  /* 
  getHero(id: number): Observable<Hero>{
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
 */
//id에 해당하는 Hero data get. if 없다면 404 return 
getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
}

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      // Console error
      console.error(error);

      // User 
      this.log(`${operation} failed: ${error.Message}`);

      //App Keep running,return 한다 default Object 
      return of(result as T);
    };
  }

/*   
  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json'})
  };
 */

  //Search
searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found heroes matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}
//CRUD( Create, Read, Update, Delete)
//SQL (Insert, Select, Update, Delete)

//1. Update (SAVE)
updateHero(hero: Hero): Observable<any>{
  return this.http.put(this.heroesUrl, hero,this.httpOptions).pipe(
    tap(_=> this.log(`update hero id = ${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  private log(message: string){
    this.messageService.addMessage('HeroService: ${message}');
  }
}
