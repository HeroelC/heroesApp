import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateHeroeComponent } from './create-or-update-heroe.component';

describe('CreateOrUpdateHeroeComponent', () => {
  let component: CreateOrUpdateHeroeComponent;
  let fixture: ComponentFixture<CreateOrUpdateHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrUpdateHeroeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrUpdateHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
