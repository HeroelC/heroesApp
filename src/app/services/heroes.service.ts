import { Injectable } from '@angular/core';
import { Heroes, UpdateHeroDTO } from '../dtos/heroes.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() {}

  create(heroe: Heroes){
    return new Observable( observer => {
      setTimeout(() => {
        const heroesList = JSON.parse(localStorage.getItem('heroes') || '[]');
        if( heroesList.length === 0 ) heroe.id = '1';
        else heroe.id = (parseInt(heroesList[heroesList.length - 1].id) + 1).toString();
        heroesList.push(heroe);
        localStorage.setItem('heroes', JSON.stringify(heroesList));
        return observer.next();
      }, 2000);
    });
  }

  get(){
    return new Observable<Heroes[]>( observer => {
      setTimeout(() => {
        try{
          const heroesList = JSON.parse(localStorage.getItem('heroes') || '[]');
          return observer.next(heroesList);
        }catch{
          return observer.error();
        }
      }, 2000);
    });
  }

  getById(id: string){
    return new Observable<Heroes>( observer => {
      setTimeout(() => {
        try{
          const heroesList = JSON.parse(localStorage.getItem('heroes') || '[]');
          const heroe = heroesList.find((hero: Heroes) => hero.id === id);
          if( !heroe ) return observer.error();
          return observer.next(heroe);
        }catch{
          return observer.error();
        }
      }, 2000);
    })
  }

  update(id: string, heroeUpdate: UpdateHeroDTO){
    return new Observable( observer => {
      setTimeout(() => {
        try{
          const heroesList = JSON.parse(localStorage.getItem('heroes') || '[]');
          let idx = heroesList.findIndex((hero: Heroes) => hero.id === id);
          if( idx === -1 ) return observer.error();
          heroesList[idx] = { ...heroesList[idx], ...heroeUpdate };
          localStorage.setItem('heroes', JSON.stringify(heroesList));
          return observer.next();
        }catch{
          return observer.error();
        }
      }, 2000);
    });
  }

  delete(ids: string[]){
    return new Observable( observer => {
      setTimeout(() => {
        try{
          let heroesList = JSON.parse(localStorage.getItem('heroes') || '[]');
          ids.forEach( id => {
            heroesList = heroesList.filter((hero: Heroes) => hero.id !== id)
          });
          localStorage.setItem('heroes', JSON.stringify(heroesList));
          return observer.next();
        }catch{
          return observer.error();
        }
      }, 2000);
    });
  }

  search(filterName: string){
    return new Observable<Heroes[]>( observer => {
      setTimeout(() => {
        try{
          const heroesList = JSON.parse(localStorage.getItem('heroes') || '[]');
          return observer.next(heroesList.filter((hero: Heroes) => hero.name.toLowerCase().includes(filterName.trim().toLowerCase())));
        }catch{
          return observer.error();
        }
      }, 2000);
    });
  }
}
