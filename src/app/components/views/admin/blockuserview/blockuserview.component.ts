import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { AdmindialogComponent } from 'src/app/components/admindialog/admindialog.component';

export interface UserData {
  name: string;
  id: number;
  status: string;
  birth: string;
  email: string;
  gender: string;
  homeaddress:string;
}
const ELEMENT_DATA: UserData[] = [
  {id: 1, name: 'NombresApellidos1', status: 'Inovador', birth: '01-03-2000',email: 'Nombre@gmail.com',gender:'Hombre',homeaddress:'Peñalolen'},
  {id: 2, name: 'NombresApellidos2', status: 'Cliente', birth: '20-12-1990',email: 'Nombre@gmail.com',gender:'Mujer',homeaddress:'La Reina'},
  {id: 3, name: 'NombresApellidos3', status: 'Inovador', birth: '01-05-1960',email: 'Nombre@gmail.com',gender:'Mujer',homeaddress:'Maipu'},
  {id: 4, name: 'NombresApellidos4', status: 'Cliente', birth: '30-09-1994',email: 'Nombre@gmail.com',gender:'Hombre',homeaddress:'Providencia'},
  {id: 5, name: 'NombresApellidos5', status: 'Cliente', birth: '09-05-1974',email: 'Nombre@gmail.com',gender:'Mujer',homeaddress:'Peñalolen'},
  {id: 6, name: 'NombresApellidos6', status: 'Inovador', birth: '02-10-1957',email: 'Nombre@gmail.com',gender:'Hombre',homeaddress:'La Reina'},
  {id: 7, name: 'NombresApellidos7', status: 'Inovador', birth: '02-10-1957',email: 'Nombre@gmail.com',gender:'Hombre',homeaddress:'La Reina'},
  {id: 8, name: 'NombresApellidos8', status: 'Inovador', birth: '02-10-1957',email: 'Nombre@gmail.com',gender:'Hombre',homeaddress:'La Reina'},
  {id: 9, name: 'NombresApellidos9', status: 'Inovador', birth: '02-10-1957',email: 'Nombre@gmail.com',gender:'Hombre',homeaddress:'La Reina'},
  {id: 10, name: 'NombresApellidos10', status: 'Inovador', birth: '02-10-1957',email: 'Nombre@gmail.com',gender:'Hombre',homeaddress:'La Reina'},
  {id: 11, name: 'NombresApellidos11', status: 'Inovador', birth: '02-10-1957',email: 'Nombre@gmail.com',gender:'Hombre',homeaddress:'La Reina'},
  {id: 12, name: 'NombresApellidos12', status: 'Inovador', birth: '02-10-1957',email: 'Nombre@gmail.com',gender:'Hombre',homeaddress:'La Reina'},
];
@Component({
  selector: 'app-blockuserview',
  templateUrl: './blockuserview.component.html',
  styleUrls: ['./blockuserview.component.scss']
})
export class BlockuserviewComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'status', 'birth', 'email','gender','homeaddress','button'];
  tables = [0];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {}

  constructor(public dialog: MatDialog) 
  {
  }
  openDialog() {
    this.dialog.open(AdmindialogComponent);
  }
}
