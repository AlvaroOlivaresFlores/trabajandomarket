import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-removeservicedialog',
  templateUrl: './removeservicedialog.component.html',
  styleUrls: ['./removeservicedialog.component.scss'],
})
export class RemoveservicedialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Service,
    public service: ServicesService,
    public dialogRef: MatDialogRef<RemoveservicedialogComponent>
  ) {}

  ngOnInit(): void {}
  removeservice() {
    this.service.deleteService(this.data).toPromise();
  }
  notremoveservice() {
    this.dialogRef.close();
  }
}
