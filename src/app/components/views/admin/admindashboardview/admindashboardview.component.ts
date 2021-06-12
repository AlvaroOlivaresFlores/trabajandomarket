import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Region } from 'src/app/models/region.enum';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { AdmindialogComponent } from 'src/app/components/admindialog/admindialog.component';
import { AuthService } from 'src/app/services/auth.service';
export interface UserData {
  id: number;
  name: string;
  last_name: string;
  birth_date: Date;
  email: string;
  gender: string;
  region: Region;
}

@Component({
  selector: 'app-admindashboardview',
  templateUrl: './admindashboardview.component.html',
  styleUrls: ['./admindashboardview.component.scss'],
})
export class AdmindashboardviewComponent implements OnInit {
  ELEMENT_DATA: User[];
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = [
    'id',
    'name',
    'last_name',
    'birth_date',
    'email',
    'gender',
    'region',
    'button',
  ];
  ngOnInit(): void {
    this.loadServices();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async loadServices() {
    this.ELEMENT_DATA = await this.userc.getUsers().toPromise();
    this.dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private userc: UsersService,
    public dialog: MatDialog,
    private router: Router,
    private authservice: AuthService
  ) {
    this.dataSource = new MatTableDataSource<User>();
    this.ELEMENT_DATA = [];
  }

  openDialog(id: number) {
    let dialogref = this.dialog.open(AdmindialogComponent, {
      data: {
        id: id,
      },
    });
    dialogref.afterClosed().subscribe((result) => {
      this.loadServices();
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['adminlogin']);
  }
}
