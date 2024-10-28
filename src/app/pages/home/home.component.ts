import { Component, ViewChild } from '@angular/core';
import { TableHeroesComponent } from '../../shared/table-heroes/table-heroes.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { PanelActionHeroesComponent } from '../../shared/panel-action-heroes/panel-action-heroes.component';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../dtos/heroes.dto';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../shared/modals/confirm/confirm.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableHeroesComponent, PanelActionHeroesComponent, AngularMaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild(TableHeroesComponent) tableHeroes!: TableHeroesComponent;

  heroes: Heroes[] = [];
  filterHeroesList: Heroes[] = [];
  heroesSelected: Heroes[] = [];
  loading: boolean = false;
  loadingFilter: boolean = false;

  constructor(private heroesService: HeroesService, private router: Router, private notification: NotificationService, private matDialog: MatDialog) { }

  ngAfterViewInit(){
    this.getAllHeroes();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if( !filterValue ) this.filterHeroesList = this.heroes;
    else {
      this.loadingFilter = true;
      this.heroesService.search(filterValue).subscribe({
      next: heroes => {
        this.filterHeroesList = heroes
        this.loadingFilter = false;
      },
      error: () =>
        {
          this.notification.showError('Disculpa, ocurrio un error al buscar los heroes')
          this.loadingFilter = false;
        }
    });
    }
  }

  selectedHeroes(heroes: Heroes[]){
    this.heroesSelected = heroes;
  }

  action( action: string ){
    switch(action){
      case 'ADD':
        this.router.navigate(['/heroe']);
        break;
      case 'EDIT':
        if(this.heroesSelected.length === 0){
          this.notification.showWarning('Debes selecionar un heroe para editar');
          return;
        }
        if(this.heroesSelected.length > 1){
          this.notification.showWarning('Solo puedes selecionar un heroe para editar');
          return;
        }
        this.router.navigate(['/heroe', this.heroesSelected[0].id]);
        break;
      case 'DELETE':
        if(this.heroesSelected.length === 0){
          this.notification.showWarning('Seleccionar al menos un heroe para eliminar');
          return;
        }

        this.matDialog.open(ConfirmComponent, {
          data: {
            heroes: this.heroesSelected
          }
        }).afterClosed().subscribe(result => {
          if(result){
            const ids = this.heroesSelected.map(hero => hero.id);
            this.tableHeroes.selection.clear();
            this.loading = true;
            this.heroesService.delete( ids ).subscribe({
              next: () => {

                this.notification.showSuccess('Heroes eliminados correctamente');
                this.loading = false;
                this.getAllHeroes();
              },
              error: () => {
                this.notification.showError('Disculpa, ocurrio un error al eliminar los heroes');
                this.loading = false;
              }
            });
          }
        });

        break;
    }
  }

  getAllHeroes(){
    this.loading = true;
    this.heroesService.get().subscribe({
      next: heroes => {
        this.heroes = heroes;
        this.filterHeroesList = heroes;
        this.loading = false;
      },
      error: () => {
        this.notification.showError('Disculpa, ocurrio un error al obtener los heroes');
        this.loading = false;
      }
    });
  }
}
