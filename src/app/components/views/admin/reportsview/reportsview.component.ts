import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ReportData {
  id: number;
  date: string;
  name: string;
  report: string;
  status: string;
}

const ELEMENT_DATA: ReportData[] = [
  {id:1,date: "01-01-2020", name: 'NombreApellido1', report: "asdassdasfasfsfas",status:"Atendida"},
  {id:2,date: "05-03-2020", name: 'NombreApellido2', report: "asdfasfsdfasdfasdfa",status:"Pendiente"},
  {id:3,date: "30-05-2020", name: 'NombreApellido3', report: "asdfasdfasdfasdfasdfasd",status:"Pendiente"},
  {id:4,date: "30-05-2020", name: 'NombreApellido4', report: "asdfasdfasdfasdfasdfasd",status:"Pendiente"},
  {id:5,date: "30-05-2020", name: 'NombreApellido5', report: "asdfasdfasdfasdfasdfasd",status:"Pendiente"},
  {id:6,date: "30-05-2020", name: 'NombreApellido6', report: "asdfasdfasdfasdfasdfasd",status:"Pendiente"},
  {id:7,date: "30-05-2020", name: 'NombreApellido7', report: "asdfasdfasdfasdfasdfasd",status:"Pendiente"},
  {id:8,date: "30-05-2020", name: 'NombreApellido8', report: "asdfasdfasdfasdfasdfasd",status:"Pendiente"},
  {id:9,date: "30-05-2020", name: 'NombreApellido9', report: "asdfasdfasdfasdfasdfasd",status:"Pendiente"},
  {id:10,date: "30-05-2020", name: 'NombreApellido10', report: "asdfasdfasdfasdfasdfasd",status:"Pendiente"},
  {id:11,date: "30-05-2020", name: 'NombreApellido11', report: "asdfasdfasdfasdfasdfasd",status:"Pendiente"},
];

@Component({
  selector: 'app-reportsview',
  templateUrl: './reportsview.component.html',
  styleUrls: ['./reportsview.component.scss']
})
export class ReportsviewComponent implements OnInit {
  displayedColumns: string[] = ['id','date', 'name', 'report','status'];

  ngOnInit(): void {}
  dataSource = new MatTableDataSource<ReportData>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor() { }
}
