import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Request } from 'src/app/models/request';
import { AuthService } from 'src/app/services/auth.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-entrepreneurtable',
  templateUrl: './entrepreneurtable.component.html',
  styleUrls: ['./entrepreneurtable.component.scss'],
})
export class EntrepreneurtableComponent implements OnInit {
  currentUser: number = 2;
  requestsEntrepreneur: Array<Request> = [];
  requests: Array<[number, string, string, number, string]> = [];
  dataSource: MatTableDataSource<[number, string, string, number, string]>;
  displayedColumns: string[] = ['index', 'uname', 'sname', 'price', 'status'];

  ngOnInit(): void {
    this.loadRequestsEntrepreneur();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(
    public dialog: MatDialog,
    private requestsService: RequestService,
    private authService: AuthService
  ) {
    this.dataSource = new MatTableDataSource<
      [number, string, string, number, string]
    >();
  }
  async loadRequestsEntrepreneur() {
    this.requestsEntrepreneur = await this.requestsService
      .getRequestedEntrepreneur(this.authService.getCurrentUser().id)
      .toPromise();
    this.requestsEntrepreneur.forEach((r, i) => {
      let index = i + 1;
      let uname = r.user.firstname + ' ' + r.user.lastname;
      let sname = r.service.name;
      let price = r.service.price;
      let status = r.status === true ? 'Pendiente' : 'Finalizado';
      this.requests.push([index, uname, sname, price, status]);
    });
    this.dataSource = new MatTableDataSource<
      [number, string, string, number, string]
    >(this.requests);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
