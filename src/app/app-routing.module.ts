import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';// TEST
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  { 
    path: 'heroes',
    component: HeroesComponent 
  },
  
  { 
    path:'dashboard',
    component: DashboardComponent
  },
  
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  
  //TEST
  { 
    path: 'messages',
    component: MessagesComponent 
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
