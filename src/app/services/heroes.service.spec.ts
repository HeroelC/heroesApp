import { TestBed } from '@angular/core/testing';
import { HeroesService } from './heroes.service';
import { Heroes, UpdateHeroDTO } from '../dtos/heroes.dto';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('create', () => {
    it('should add a hero to localStorage', (done) => {
      const hero: Heroes = { id: '1', name: 'Prueba superMan', img: 'base64testimg', type: 'hero' };
      service.create(hero).subscribe(() => {
        const heroesList = JSON.parse(localStorage.getItem('heroes') || '[]');
        expect(heroesList.length).toBe(1);
        expect(heroesList[0].name).toBe('Prueba superMan');
        done();
      });
    });
  });

  describe('get', () => {
    it('should return an empty list initially', (done) => {
      service.get().subscribe((heroes) => {
        expect(heroes).toEqual([]);
        done();
      });
    });

    it('should return heroes from localStorage', (done) => {
      const hero: Heroes = { id: '1', name: 'Prueba Batman', img: 'base64testimg', type: 'hero' };
      localStorage.setItem('heroes', JSON.stringify([hero]));

      service.get().subscribe((heroes) => {
        expect(heroes.length).toBe(1);
        expect(heroes[0].name).toBe('Prueba Batman');
        done();
      });
    });
  });

  describe('getById', () => {
    it('should return a hero by ID', (done) => {
      const hero: Heroes = { id: '1', name: 'Prueba Batman', img: 'base64testimg', type: 'hero' };
      localStorage.setItem('heroes', JSON.stringify([hero]));

      service.getById('1').subscribe((foundHero) => {
        expect(foundHero.name).toBe('Prueba Batman');
        done();
      });
    });

    it('should return an error if the hero is not found', (done) => {
      service.getById('2').subscribe({
        next: () => {},
        error: () => {
          expect(true).toBeTrue();
          done();
        }
      });
    });
  });

  describe('update', () => {
    it('should update a hero', (done) => {
      const hero: Heroes = { id: '1', name: 'Prueba heroe', img: 'base64testimg', type: 'hero' };
      localStorage.setItem('heroes', JSON.stringify([hero]));
      const updatedHero: UpdateHeroDTO = { name: 'heroe Prueba' };

      service.update('1', updatedHero).subscribe(() => {
        const heroesList = JSON.parse(localStorage.getItem('heroes') || '[]');
        expect(heroesList[0].name).toBe('heroe Prueba');
        done();
      });
    });

    it('should return an error if the hero does not exist', (done) => {
      const updatedHero: UpdateHeroDTO = { name: 'Flash' };

      service.update('2', updatedHero).subscribe({
        next: () => {},
        error: () => {
          expect(true).toBeTrue();
          done();
        }
      });
    });
  });

  describe('delete', () => {
    it('should delete a hero by ID', (done) => {
      const hero: Heroes = { id: '1', name: 'Prueba heroe', img: 'base64testimg', type: 'hero' };
      localStorage.setItem('heroes', JSON.stringify([hero]));

      service.delete(['1']).subscribe(() => {
        const heroesList = JSON.parse(localStorage.getItem('heroes') || '[]');
        expect(heroesList.length).toBe(0);
        done();
      });
    });

    it('should delete multiple heroes', (done) => {
      const hero1: Heroes = { id: '1', name: 'Prueba heroe', img: 'base64testimg', type: 'hero' };
      const hero2: Heroes = { id: '2', name: 'Prueba heroe', img: 'base64testimg', type: 'hero' };
      localStorage.setItem('heroes', JSON.stringify([hero1, hero2]));

      service.delete(['1', '2']).subscribe(() => {
        const heroesList = JSON.parse(localStorage.getItem('heroes') || '[]');
        expect(heroesList.length).toBe(0);
        done();
      });
    });
  });

  describe('search', () => {
    it('should return heroes that match the filter', (done) => {
      const hero: Heroes = { id: '1', name: 'Prueba heroe', img: 'base64testimg', type: 'hero' };
      localStorage.setItem('heroes', JSON.stringify([hero]));

      service.search('Prueba heroe').subscribe((heroes) => {
        expect(heroes.length).toBe(1);
        expect(heroes[0].name).toBe('Prueba heroe');
        done();
      });
    });

    it('should return an empty list if no match is found', (done) => {
      const hero: Heroes = { id: '1', name: 'Prueba heroe', img: 'base64testimg', type: 'hero' };
      localStorage.setItem('heroes', JSON.stringify([hero]));

      service.search('iron').subscribe((heroes) => {
        expect(heroes.length).toBe(0);
        done();
      });
    });
  });
});
