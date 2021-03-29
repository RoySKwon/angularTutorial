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
            name: 'Superman' 
        },
    
        { 
            id: 12, 
            name: 'Wonderwoman' 
        },
    
        { 
            id: 13, 
            name: 'Batman' 
        },
        
        { 
            id: 14, 
            name: 'Flash'
        },
    
        { 
            id: 15, 
            name: 'Robin' 
        },
    
        { 
          id: 16, 
            name: 'Batwoman' 
        },
    
        { 
            id: 17, 
            name: 'Batgirl'  
        },
    
        { 
            id: 18, 
            name: 'Shazam' 
        },
    
        { 
            id: 19, 
            name: 'Aquaman' 
        },
    
        { 
            id: 20, 
            name: 'Greenlantern' 
        },
    ];
    return {heroes}
  }

  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(heroe => heroe.id)) + 1 : 11;
  }
}
