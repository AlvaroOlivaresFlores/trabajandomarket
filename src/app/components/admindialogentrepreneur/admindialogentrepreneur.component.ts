import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from '../views/admin/admindashboardentrepreneurview/admindashboardentrepreneurview.component';
import { EntrepreneurService } from 'src/app/services/entrepreneur.service';

@Component({
  selector: 'app-admindialogentrepreneur',
  templateUrl: './admindialogentrepreneur.component.html',
  styleUrls: ['./admindialogentrepreneur.component.scss'],
})
export class AdmindialogentrepreneurComponent implements OnInit {
  ELEMENT_DATA: Entrepreneur[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserData,
    private userc: EntrepreneurService,
    public _snackBar: MatSnackBar
  ) {
    this.ELEMENT_DATA = [];
  }
  ngOnInit(): void {}
  openSnackBar() {
    this._snackBar.open('Usuario bloqueado', 'OK', {
      panelClass: ['color1'],
      duration: 1500,
    });
    console.log(this.data.id);
    this.userc.deleteEntrepreneur(this.data.id).toPromise();
  }
  openSnackBar2() {
    this._snackBar.open('No bloqueaste este usuario', 'OK', {
      panelClass: ['color2'],
      duration: 1500,
    });
  }
}
