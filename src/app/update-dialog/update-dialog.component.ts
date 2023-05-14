import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css'],
})
export class UpdateDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<UpdateDialogComponent>) {}

  closeDialog(value?: any) {
    // Perform additional actions before closing the dialog box, if needed
    // ...
    this.dialogRef.close(value);
  }
}
