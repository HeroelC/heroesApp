import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { CreateOrUpdateHeroComponent } from './create-or-update-hero.component';
import { HeroesService } from '../../../../services/heroes.service';
import { NotificationService } from '../../../../services/notification.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { AngularMaterialModule } from '../../../../shared/angular-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateOrUpdateHeroComponent', () => {
  let component: CreateOrUpdateHeroComponent;
  let fixture: ComponentFixture<CreateOrUpdateHeroComponent>;
  let heroesServiceMock: jasmine.SpyObj<HeroesService>;
  let notificationServiceMock: jasmine.SpyObj<NotificationService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    heroesServiceMock = jasmine.createSpyObj('HeroesService', ['create', 'update']);
    notificationServiceMock = jasmine.createSpyObj('NotificationService', ['showSuccess', 'showError', 'showWarning']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [CreateOrUpdateHeroComponent],
      imports: [ReactiveFormsModule, FormsModule, AngularMaterialModule, NoopAnimationsModule],
      providers: [
        { provide: HeroesService, useValue: heroesServiceMock },
        { provide: NotificationService, useValue: notificationServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  it('should initialize form with hero data if hero input is provided', () => {
    component.hero = { id: '1', name: 'Superman', description: 'test de descripcion', power: 100, img: 'test.jpg', type: 'hero' };
    component.ngOnInit();
    expect(component.form.value).toEqual({
      name: 'Superman',
      description: 'test de descripcion',
      power: 100,
      img: 'test.jpg',
      type: 'hero'
    });
  });

  it('should call create method on heroesService if no hero id is provided', fakeAsync(() => {
    heroesServiceMock.create.and.returnValue(of({}));
    component.form.setValue({
      name: 'Batman',
      description: 'Murcielago',
      power: 85,
      img: 'test-batman.jpg',
      type: 'hero'
    });

    component.createOrUpdate();
    tick();

    expect(heroesServiceMock.create).toHaveBeenCalledWith(component.form.value);
    expect(notificationServiceMock.showSuccess).toHaveBeenCalledWith('Heroe creado correctamente');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
  }));

  it('should call update method on heroesService if hero id is provided', fakeAsync(() => {
    component.hero = { id: '1', name: 'Superman', description: '', power: 100, img: 'superman.jpg', type: 'hero' };
    heroesServiceMock.update.and.returnValue(of({}));
    component.ngOnInit();
    component.form.setValue({
      name: 'Superman',
      description: '',
      power: 100,
      img: 'superman.jpg',
      type: 'hero'
    });

    component.createOrUpdate();
    tick();

    expect(heroesServiceMock.update).toHaveBeenCalledWith('1', component.form.value);
    expect(notificationServiceMock.showSuccess).toHaveBeenCalledWith('Heroe actualizado correctamente');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
  }));

  it('should display warning if form is invalid', () => {
    component.form.setValue({
      name: '',
      description: '',
      power: 100,
      img: '',
      type: ''
    });
    component.createOrUpdate();

    expect(notificationServiceMock.showWarning).toHaveBeenCalledWith('Por favor, complete los campos requeridos');
  });

  it('should set loading to false and show error if creation fails', fakeAsync(() => {
    heroesServiceMock.create.and.returnValue(throwError(() => new Error('Error al crear el héroe')));
    component.form.setValue({
      name: 'Batman',
      description: 'Detective',
      power: 85,
      img: 'batman123.jpg',
      type: 'hero'
    });

    component.createOrUpdate();
    tick();

    expect(component.loading).toBeFalse();
    expect(notificationServiceMock.showError).toHaveBeenCalledWith('Error al crear el heroe');
  }));
});
