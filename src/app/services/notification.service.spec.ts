import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('NotificationService', () => {
  let service: NotificationService;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [
        NotificationService,
        { provide: MatSnackBar, useValue: snackBarSpy }
      ]
    });

    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('showSuccess', () => {
    it('should call open on MatSnackBar with success message', () => {
      const message = 'Mensaje de exito';
      service.showSuccess(message);
      expect(snackBarSpy.open).toHaveBeenCalledWith(message, 'X', {
        verticalPosition: 'top',
        panelClass: ['success-notification']
      });
    });
  });

  describe('showError', () => {
    it('should call open on MatSnackBar with error message', () => {
      const message = 'Mensaje de error';
      service.showError(message);
      expect(snackBarSpy.open).toHaveBeenCalledWith(message, 'X', {
        verticalPosition: 'top',
        panelClass: ['error-notification']
      });
    });
  });

  describe('showWarning', () => {
    it('should call open on MatSnackBar with warning message', () => {
      const message = 'Mensaje de advertencia';
      service.showWarning(message);
      expect(snackBarSpy.open).toHaveBeenCalledWith(message, 'X', {
        verticalPosition: 'top',
        panelClass: ['warning-notification']
      });
    });
  });
});
