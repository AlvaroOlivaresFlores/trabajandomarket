import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { User } from 'src/app/models/user';
import { EntrepreneurService } from 'src/app/services/entrepreneur.service';
import { UsersService } from 'src/app/services/users.service';
import { ReportsService } from 'src/app/services/reports.service';
import { Report } from 'src/app/models/report';

@Component({
  selector: 'app-reportsview',
  templateUrl: './reportsview.component.html',
  styleUrls: ['./reportsview.component.scss'],
})
export class ReportsviewComponent implements OnInit {
  ELEMENT_DATA: User[];
  Entre_Data: Entrepreneur[];
  Report_Data: Report[];
  dataSource: MatTableDataSource<Report>;
  user_count: number;
  entre_count: number;
  entre_average: number;
  d: string;

  displayedColumns: string[] = [
    'date',
    'usuarios',
    'emprendedores',
    'porcentaje',
  ];
  ngOnInit(): void {
    this.loadServices();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  async loadServices() {
    this.ELEMENT_DATA = await this.userc.getUsers().toPromise();
    this.Entre_Data = await this.usere.getEntrepreneurs().toPromise();
    this.Report_Data = await this.reports.getReports().toPromise();

    this.dataSource = new MatTableDataSource<Report>(this.Report_Data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private reports: ReportsService,
    private userc: UsersService,
    private usere: EntrepreneurService
  ) {
    this.dataSource = new MatTableDataSource<Report>();
    this.ELEMENT_DATA = [];
    this.Report_Data = [];
    this.Entre_Data = [];
    this.user_count = 0;
    this.entre_count = 0;
    this.entre_average = 0;
    this.d = '';
  }
  addReport() {
    this.d = new Date(Date.now()).toISOString();
    this.user_count = this.ELEMENT_DATA.length;
    this.entre_count = this.Entre_Data.length;
    this.entre_average = this.entre_count / this.user_count;
    this.reports
      .addReport(
        new Report(
          new Date(this.d),
          this.user_count,
          this.entre_count,
          this.entre_average
        )
      )
      .toPromise();
    console.log(this.user_count);
    this.loadServices();
  }
}
