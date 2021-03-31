import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const heroes = [
        { 
            id: 11, 
            name: 'SuperVillain' 
        },
    
        { 
            id: 12, 
            name: 'WonderFrau' 
        },
    
        { 
            id: 13, 
            name: 'BatHerr' 
        },
        
        { 
            id: 14, 
            name: 'Blitz'
        },
    
        { 
            id: 15, 
            name: 'Robinson' 
        },
    
        { 
          id: 16, 
            name: 'Batjungs' 
        },
    
        { 
            id: 17, 
            name: 'Batkinder'  
        },
    
        { 
            id: 18, 
            name: 'Schamann' 
        },
    
        { 
            id: 19, 
            name: 'Aqualeute' 
        },
    
        { 
            id: 20, 
            name: 'Greenlampe' 
        },
    ];
    return {heroes}
  }

  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(heroe => heroe.id)) + 1 : 11;
  }
}
