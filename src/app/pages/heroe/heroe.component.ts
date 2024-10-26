import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../dtos/heroes.dto';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.scss'
})
export class HeroeComponent {
  title = '';
  heroe: Heroes | null = null;
  loading = false;

  constructor( private route: ActivatedRoute, private heroService: HeroesService, private router: Router ) {
    this.route.params.subscribe( params => {
      this.loading = true;
      const id = params['id'];
      if( id ) {
        this.heroService.getById( id ).subscribe({
          next: heroe => {
            this.heroe = heroe;
            this.title = 'Editando heroe';
            this.loading = false;
        },
        error: () => {
          this.router.navigate(['/404']);
        }
        });
      }else{
        this.title = 'Creando nuevo heroe';
        this.loading = false;
      }
    });
  }
}
