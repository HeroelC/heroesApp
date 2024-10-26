import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe.component';
import { HeroeRoutingModule } from './heroe-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { CreateOrUpdateHeroeComponent } from './components/create-or-update-heroe/create-or-update-heroe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroeComponent, CreateOrUpdateHeroeComponent],
  imports: [
    CommonModule,
    HeroeRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeroeModule { }