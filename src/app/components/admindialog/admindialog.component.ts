import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admindialog',
  templateUrl: './admindialog.component.html',
  styleUrls: ['./admindialog.component.scss']
})
export class AdmindialogComponent implements OnInit {

  constructor(public _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }
  openSnackBar() {
    this._snackBar.open('Usuario bloqueado', 'OK',{panelClass: ['color1']});
  }
  openSnackBar2() {
    this._snackBar.open('No bloqueaste este usuario', 'OK',{panelClass: ['color2']});
  }
}