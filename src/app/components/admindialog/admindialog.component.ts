import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admindialog',
  templateUrl: './admindialog.component.html',
  styleUrls: ['./admindialog.component.scss']
})
export class AdmindialogComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }
  openSnackBar() {
    this._snackBar.open('Usuario bloqueado', 'Ok');
  }
  openSnackBar2() {
    this._snackBar.open('No bloqueaste este usuario', 'Ok');
  }
}
