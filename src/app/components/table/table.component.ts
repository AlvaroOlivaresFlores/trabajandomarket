import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

export interface HiredServicesData {
  name: string;
  position: number;
  price: number;
  state: string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  Element_hired: Service[];
  dataSource: MatTableDataSource<Service>;
  displayedColumns: string[] = ['position', 'name', 'price'];

  ngOnInit(): void {
    this.loadServices();
  }

  async loadServices() {
    this.Element_hired=await this.hired.getServices().toPromise();
    this.dataSource=new MatTableDataSource<Service>(this.Element_hired);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }



  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(private hired:ServicesService,) {
    this.Element_hired=[];
    this.dataSource=new MatTableDataSource<Service>();
  }
}
