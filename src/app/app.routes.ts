import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { Error404Component } from './shared/error404/error404.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'heroe',
    loadChildren: () => import('./pages/heroe/heroe.module').then(m => m.HeroeModule)
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: ''
  }
];
