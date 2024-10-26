import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _snackBar = inject(MatSnackBar);

  constructor() { }

  showSuccess(message: string){
    this._snackBar.open(message, 'X', {
      verticalPosition: 'top',
      panelClass: ['success-notification']
    });
  }

  showError(message: string){
    this._snackBar.open(message, 'X', {
      verticalPosition: 'top',
      panelClass: ['error-notification']
    });
  }

  showWarning(message: string){
    this._snackBar.open(message, 'X', {
      verticalPosition: 'top',
      panelClass: ['warning-notification']
    });
  }
}
