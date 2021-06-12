import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  price: string;
  name: string;
}
@Component({
  selector: 'app-requestdialog',
  templateUrl: './requestdialog.component.html',
  styleUrls: ['./requestdialog.component.scss'],
})
export class RequestdialogComponent implements OnInit {
  confirmService: boolean = true;
  constructor(
    public dialogRef: MatDialogRef<RequestdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
