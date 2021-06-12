import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  price: string;
  name: string;
}


@Component({
  selector: 'app-servicedialog',
  templateUrl: './servicedialog.component.html',
  styleUrls: ['./servicedialog.component.scss'],
})
export class ServicedialogComponent implements OnInit {
  confirmService: boolean  = true;
  constructor(
    public dialogRef: MatDialogRef<ServicedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

}
