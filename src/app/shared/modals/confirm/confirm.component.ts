import { Component, Inject } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [ AngularMaterialModule],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})
export class ConfirmComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ConfirmComponent>) { }

  confirm(status: boolean){
    this.dialogRef.close(status);
  }

}
