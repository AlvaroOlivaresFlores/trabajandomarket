import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface HiredServicesData {
  name: string;
  position: number;
  price: number;
  state: string;
}

const ELEMENT_DATA: HiredServicesData[] = [
  { position: 1, name: 'Servicio 1', price: 179, state: 'Finalizado' },
  { position: 2, name: 'Servicio 2', price: 402, state: 'Finalizado' },
  { position: 3, name: 'Servicio 3', price: 641, state: 'En curso' },
  { position: 4, name: 'Servicio 4', price: 922, state: 'Finalizado' },
  { position: 5, name: 'Servicio 5', price: 101, state: 'Finalizado' },
  { position: 6, name: 'Servicio 6', price: 107, state: 'Finalizado' },
  { position: 7, name: 'Servicio 7', price: 167, state: 'Finalizado' },
  { position: 8, name: 'Servicio 8', price: 194, state: 'Finalizado' },
  { position: 9, name: 'Servicio 9', price: 184, state: 'Finalizado' },
  { position: 10, name: 'Servicio 10', price: 297, state: 'Finalizado' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'state', 'price'];

  ngOnInit(): void {}
  dataSource = new MatTableDataSource<HiredServicesData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor() {}
}
