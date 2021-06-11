import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Request } from 'src/app/models/request';
import { AuthService } from 'src/app/services/auth.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss'],
})
export class UsertableComponent implements AfterViewInit {
  currentUser: number = 1;
  requests: Array<Request> = [];
  requestedServices: Array<[number, string, number, string, string]> = [];
  dataSource: MatTableDataSource<[number, string, number, string, string]>;
  displayedColumns: string[] = ['index', 'ename', 'price', 'sname', 'status'];

  ngOnInit(): void {
    this.loadRequests();
  }

  async loadRequests() {
    this.currentUser=this.authservice.getCurrentUserLog().id;
    this.requests = await this.requestsService
      .getRequestedServices(this.currentUser)
      .toPromise();
    this.requests.forEach((r, i) => {
      let index = i + 1;
      let sname = r.service.name;
      let ename = r.entrepreneur.firstname + ' ' + r.entrepreneur.lastname;
      let price = r.service.price;
      let status = r.status === true ? 'Pendiente' : 'Finalizado';
      this.requestedServices.push([index, sname, price, ename, status]);
    });
    this.dataSource = new MatTableDataSource<
      [number, string, number, string, string]
    >(this.requestedServices);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(private requestsService: RequestService,private authservice:AuthService) {
    this.dataSource = new MatTableDataSource<
      [number, string, number, string, string]
    >();
  }
}
