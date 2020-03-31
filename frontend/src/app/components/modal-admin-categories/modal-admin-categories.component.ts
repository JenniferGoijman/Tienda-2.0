import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';  

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-modal-admin-categories',
  templateUrl: './modal-admin-categories.component.html',
  styleUrls: ['./modal-admin-categories.component.scss']
})
export class ModalAdminCategoriesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalAdminCategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }
}
