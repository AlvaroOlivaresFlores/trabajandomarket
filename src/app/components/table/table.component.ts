import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/app/models/service';
import { User } from 'src/app/models/user';
import { ServicesService } from 'src/app/services/services.service';
import { UsersService } from 'src/app/services/users.service';

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
  contractedServices: Service[];
  users: User[];
  dataSource: MatTableDataSource<Service>;
  displayedColumns: string[] = ['position', 'name', 'price'];

  ngOnInit(): void {
    this.loadServices();
  }

  async loadServices() {
    this.Element_hired = await this.hired.getServices().toPromise();
    this.users = await this.usersService.getUsers().toPromise();

    this.users.forEach((u) => {
      console.log(u.name)
      // Se simula que el usuario logueado tiene el id = 6
      if (u.id === 6) {
        u.contractedServices.forEach((s) => {

          this.Element_hired.forEach(se => {
            if (s === se.id){
              this.contractedServices.push(se);
            }
          })
        });
      }
    });

    this.dataSource = new MatTableDataSource<Service>(this.contractedServices);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(
    private hired: ServicesService,
    private usersService: UsersService
  ) {
    this.Element_hired = [];
    this.users = [];
    this.dataSource = new MatTableDataSource<Service>();
    this.contractedServices = [];
  }
}
