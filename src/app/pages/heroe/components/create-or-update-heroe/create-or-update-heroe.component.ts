import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Heroes } from '../../../../dtos/heroes.dto';
import { HeroesService } from '../../../../services/heroes.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-create-or-update-heroe',
  templateUrl: './create-or-update-heroe.component.html',
  styleUrl: './create-or-update-heroe.component.scss'
})
export class CreateOrUpdateHeroeComponent {

  @Input() heroe: Heroes | null = null;

  form!: FormGroup;
  loading: boolean = false;

  types = [
    { value: 'hero', description: 'Hero' },
    { value: 'villain', description: 'Villain' },
  ]

  constructor(private heroesService: HeroesService, private route: Router, private notification: NotificationService) {}

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl(this.heroe?.name ?? '', [Validators.required, Validators.minLength(2)]),
      description: new FormControl(this.heroe?.description ?? ''),
      power: new FormControl<number | null>(this.heroe?.power ?? null),
      img: new FormControl<string>(this.heroe?.img ?? '', [Validators.required]),
      type: new FormControl<'hero' | 'villain' | null>(this.heroe?.type ?? null, [Validators.required]),
    });
  }

  createOrUpdate(){
    if( this.form.valid ){
      if(this.heroe?.id){
        this.update()
      }else{
        this.create()
      }
    }else{
      this.notification.showWarning('Por favor, complete los campos requeridos');
    }
  }

  back(){
    this.route.navigate(['/']);
  }

  create(){
    this.loading = true;
    this.heroesService.create(this.form.value).subscribe({
      next: () => {
        this.notification.showSuccess('Heroe creado correctamente');
        this.loading = false;
        this.route.navigate(['/']);
      },
      error: () => {
        this.loading = false;
        this.notification.showError('Error al crear el heroe');
      }
    });
  }

  update(){
    if(this.heroe?.id){
      this.loading = true;
      this.heroesService.update(this.heroe.id, this.form.value).subscribe({
        next: () => {
          this.notification.showSuccess('Heroe actualizado correctamente');
          this.loading = false;
          this.route.navigate(['/']);
        },
        error: () => {
          this.loading = false;
          this.notification.showError('Error al actualizar el heroe');
        }
      });
    }
  }
}
