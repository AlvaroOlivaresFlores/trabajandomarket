import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ReportData {
  date: string;
  usuarios: number;
  innovadores: number;
  ganancias: number;
}

const ELEMENT_DATA: ReportData[] = [
  {date: "30-05-2020", usuarios: 1000, innovadores: 500,ganancias:1000000},
  {date: "29-05-2020", usuarios: 1000, innovadores: 500,ganancias:1000000},
  {date: "28-05-2020", usuarios: 1000, innovadores: 500,ganancias:1000000},
  {date: "27-05-2020", usuarios: 1000, innovadores: 500,ganancias:1000000},
  {date: "26-05-2020", usuarios: 1000, innovadores: 500,ganancias:1000000},
  {date: "25-05-2020", usuarios: 1000, innovadores: 500,ganancias:1000000},
  {date: "24-05-2020", usuarios: 1000, innovadores: 500,ganancias:1000000},
  {date: "23-05-2020", usuarios: 1000, innovadores: 500,ganancias:1000000},
  {date: "22-05-2020", usuarios: 1000, innovadores: 500,ganancias:1000000},
  {date: "21-05-2020", usuarios: 1000, innovadores: 500,ganancias:1000000},
  {date: "20-05-2020", usuarios: 1000, innovadores: 500,ganancias:1000000},
];

@Component({
  selector: 'app-reportsview',
  templateUrl: './reportsview.component.html',
  styleUrls: ['./reportsview.component.scss']
})
export class ReportsviewComponent implements OnInit {
  displayedColumns: string[] = ['date', 'usuarios', 'innovadores','ganancias'];

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
