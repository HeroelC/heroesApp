import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HeroesService } from '../../services/heroes.service';
import { NotificationService } from '../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { TableHeroesComponent } from '../../shared/table-heroes/table-heroes.component';
import { PanelActionHeroesComponent } from '../../shared/panel-action-heroes/panel-action-heroes.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Heroes } from '../../dtos/heroes.dto';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let heroesServiceMock: jasmine.SpyObj<HeroesService>;
  let notificationServiceMock: jasmine.SpyObj<NotificationService>;
  let dialogMock: jasmine.SpyObj<MatDialog>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    heroesServiceMock = jasmine.createSpyObj('HeroesService', ['get', 'search', 'delete']);
    notificationServiceMock = jasmine.createSpyObj('NotificationService', ['showError', 'showWarning', 'showSuccess']);
    dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ HomeComponent, TableHeroesComponent, PanelActionHeroesComponent, NoopAnimationsModule ],
      providers: [
        { provide: HeroesService, useValue: heroesServiceMock },
        { provide: NotificationService, useValue: notificationServiceMock },
        { provide: MatDialog, useValue: dialogMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    heroesServiceMock.get.and.returnValue(of([]));
    heroesServiceMock.search.and.returnValue(of([]));
    heroesServiceMock.delete.and.returnValue(of(null));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all heroes on init', () => {
    component.getAllHeroes();
    expect(heroesServiceMock.get).toHaveBeenCalled();
  });

  it('should apply filter correctly', () => {
    const heroes: Heroes[] = [{ id: '1', name: 'Héroe de test 1', img:'base64testimg', type: 'hero' }, { id: '2', name: 'Héroe de test 2', img:'base64testimg2', type: 'villain' }];
    heroesServiceMock.search.and.returnValue(of(heroes));

    component.applyFilter({ target: { value: 'test' } } as unknown as Event);
    expect(component.filterHeroesList).toEqual(heroes);
    expect(component.loadingFilter).toBeFalse();
  });

  it('should handle error while applying filter', () => {
    heroesServiceMock.search.and.returnValue(throwError('Error'));

    component.applyFilter({ target: { value: 'Héroe prueba error' } } as unknown as Event);
    expect(notificationServiceMock.showError).toHaveBeenCalledWith('Disculpa, ocurrio un error al buscar los heroes');
    expect(component.loadingFilter).toBeFalse();
  });

  it('should handle warning while edit with 0 selected heroes', () => {
    component.heroesSelected = [];

    component.action('EDIT');
    expect(notificationServiceMock.showWarning).toHaveBeenCalledWith('Debes selecionar un heroe para editar');
    expect(component.loadingFilter).toBeFalse();
  });

  it('should handle warning while edit with more one selected heroes', () => {
    component.heroesSelected = [{ id: '1', name: 'Héroe de test 1', img:'base64testimg', type: 'hero' }, { id: '2', name: 'Héroe de test 2', img:'base64testimg2', type: 'villain' }];

    component.action('EDIT');
    expect(notificationServiceMock.showWarning).toHaveBeenCalledWith('Solo puedes selecionar un heroe para editar');
    expect(component.loadingFilter).toBeFalse();
  });

  it('should handle warning while delete with 0 selected heroes', () => {
    component.heroesSelected = [];

    component.action('DELETE');
    expect(notificationServiceMock.showWarning).toHaveBeenCalledWith('Seleccionar al menos un heroe para eliminar');
    expect(component.loadingFilter).toBeFalse();
  });
});
