import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { Service } from 'src/app/models/service';
import { EntrepreneurService } from 'src/app/services/entrepreneur.service';
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
  public entrepreneurs: Array<Entrepreneur> = [];

  displayedColumns: string[] = ['position', 'name', 'state', 'price'];

  ngOnInit(): void {
    this.loadEntrepreneurs();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(private service: ServicesService, public dialog: MatDialog, private entrepreneurC: EntrepreneurService) {
    this.dataSource = new MatTableDataSource<Service>();
    this.services = [];
  }
  async loadEntrepreneurs() { //ok
    this.services = await this.service.getServices().toPromise();
    this.entrepreneurs = await this.entrepreneurC.getUsers().toPromise();
    this.loadServices();
  }
  async loadServices(){
    console.log(this.entrepreneurs[0].name)
    for(let i = 0; i<this.services.length; i++){
      for(let j =0; j<this.entrepreneurs[0].services.length;j++){
        if(this.services[i].id == this.entrepreneurs[0].services[j]){
          this.myservices.push(this.services[i])
        }
      }
    }
    this.dataSource = new MatTableDataSource<Service>(this.myservices);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
}