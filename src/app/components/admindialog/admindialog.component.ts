import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from '../views/admin/admindashboardview/admindashboardview.component';

@Component({
  selector: 'app-admindialog',
  templateUrl: './admindialog.component.html',
  styleUrls: ['./admindialog.component.scss'],
})
export class AdmindialogComponent implements OnInit {
  ELEMENT_DATA: User[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserData,
    private userc: UsersService,
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
    this.userc.deleteUser(this.data.id).toPromise();
  }
  openSnackBar2() {
    this._snackBar.open('No bloqueaste este usuario', 'OK', {
      panelClass: ['color2'],
      duration: 1500,
    });
  }
}
