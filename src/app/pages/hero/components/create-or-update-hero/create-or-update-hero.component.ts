import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Heroes } from '../../../../dtos/heroes.dto';
import { HeroesService } from '../../../../services/heroes.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-create-or-update-hero',
  templateUrl: './create-or-update-hero.component.html',
  styleUrl: './create-or-update-hero.component.scss'
})
export class CreateOrUpdateHeroComponent {

  @Input() hero: Heroes | null = null;

  form!: FormGroup;
  loading: boolean = false;

  types = [
    { value: 'hero', description: 'Héroe' },
    { value: 'villain', description: 'Villano' },
  ]

  constructor(private heroesService: HeroesService, private route: Router, private notification: NotificationService) {}

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl(this.hero?.name ?? '', [Validators.required, Validators.minLength(2)]),
      description: new FormControl(this.hero?.description ?? ''),
      power: new FormControl<number | null>(this.hero?.power ?? null),
      img: new FormControl<string>(this.hero?.img ?? '', [Validators.required]),
      type: new FormControl<'hero' | 'villain' | null>(this.hero?.type ?? null, [Validators.required]),
    });
  }

  createOrUpdate(){
    if( this.form.valid ){
      if(this.hero?.id){
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
    if(this.hero?.id){
      this.loading = true;
      this.heroesService.update(this.hero.id, this.form.value).subscribe({
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

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.loading = true;
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.form.get('img')?.setValue(reader.result);
        this.loading = false;
      };

      reader.readAsDataURL(file);
    }
  }

  openFileInput( element : HTMLInputElement ){
    element.click();
  }
}
