import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EntrepreneurdialogComponent } from 'src/app/components/entrepreneurdialog/entrepreneurdialog.component';

@Component({
  selector: 'app-entrepreneurs',
  templateUrl: './entrepreneurs.component.html',
  styleUrls: ['./entrepreneurs.component.scss'],
})
export class EntrepreneursComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EntrepreneurdialogComponent);
  }

  ngOnInit(): void {}
}
