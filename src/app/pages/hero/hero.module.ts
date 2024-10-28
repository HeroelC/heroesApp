import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroRoutingModule } from './hero-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpperFirstLetterDirective } from '../../directives/upper-first-letter.directive';
import { CreateOrUpdateHeroComponent } from './components/create-or-update-hero/create-or-update-hero.component';

@NgModule({
  declarations: [HeroComponent, CreateOrUpdateHeroComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UpperFirstLetterDirective,
  ]
})
export class HeroeModule { }
