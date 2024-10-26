import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelActionHeroesComponent } from './panel-action-heroes.component';

describe('PanelActionHeroesComponent', () => {
  let component: PanelActionHeroesComponent;
  let fixture: ComponentFixture<PanelActionHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelActionHeroesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelActionHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
