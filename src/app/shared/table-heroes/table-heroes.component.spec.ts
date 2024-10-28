import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeroesComponent } from './table-heroes.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TableHeroesComponent', () => {
  let component: TableHeroesComponent;
  let fixture: ComponentFixture<TableHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHeroesComponent, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
