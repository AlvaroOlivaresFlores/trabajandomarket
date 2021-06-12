import { ThisReceiver } from '@angular/compiler';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { Region } from 'src/app/models/region.enum';
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
  d:string;
  m:string;
  y:string;

  displayedColumns: string[] = ['date', 'usuarios', 'emprendedores', 'porcentaje'];
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
    private usere: EntrepreneurService,
  ) {
    this.dataSource = new MatTableDataSource<Report>();
    this.ELEMENT_DATA = [];
    this.Report_Data = [];
    this.Entre_Data = [];
    this.user_count = 0;
    this.entre_count = 0;
    this.entre_average = 0;
    this.d="";
    this.m="";
    this.y="";
  }
  addReport(){
    let dat:Date=new Date(Date.now());
    this.user_count = this.ELEMENT_DATA.length;
    this.entre_count = this.Entre_Data.length;
    this.entre_average = this.entre_count / this.user_count;
    this.d=dat.getDate().toString();
    this.m=(dat.getMonth()+1).toString();
    this.y=dat.getFullYear().toString();
    this.reports.addReport(new Report(this.m+"/"+this.d+"/"+this.y,this.user_count,this.entre_count,this.entre_average)).toPromise();
    console.log(this.user_count);
    this.loadServices()
  }
}
