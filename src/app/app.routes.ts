import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './shared/error404/error404.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'hero',
    loadChildren: () => import('./pages/hero/hero.module').then(m => m.HeroModule)
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
