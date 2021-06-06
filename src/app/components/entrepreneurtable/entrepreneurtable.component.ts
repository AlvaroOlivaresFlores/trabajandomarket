import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { matTabsAnimations } from '@angular/material/tabs';
import { Category } from 'src/app/models/category.enum';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

export interface User {
  name: string;
  position: number;
  price: number;
  state: string;
}

@Component({
  selector: 'app-entrepreneurtable',
  templateUrl: './entrepreneurtable.component.html',
  styleUrls: ['./entrepreneurtable.component.scss']
})
export class EntrepreneurtableComponent implements OnInit {

  public services: Array<Service> = [];
  public myservices: Array<Service> = [];
  dataSource: MatTableDataSource<Service>;

  displayedColumns: string[] = ['position', 'name', 'state', 'price'];

  ngOnInit(): void {
    this.loadServices();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(private service: ServicesService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Service>();
    this.services = [];
  }

  async loadServices(){
    this.services = await this.service.getServices().toPromise();
    for(let i = 0; i<this.services.length; i++){
      if(this.services[i].name=="Rank"){
        this.myservices.push(this.services[i])
      }
    }
    this.dataSource = new MatTableDataSource<Service>(this.myservices);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}