import { Component, EventEmitter, Output } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';

@Component({
  selector: 'app-panel-action-heroes',
  standalone: true,
  imports: [ AngularMaterialModule],
  templateUrl: './panel-action-heroes.component.html',
  styleUrl: './panel-action-heroes.component.scss'
})
export class PanelActionHeroesComponent {

  @Output() pressAction = new EventEmitter<string>();

  action( action: string ){
    this.pressAction.emit(action);
  }
}
