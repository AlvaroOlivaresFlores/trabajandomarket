import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  Input,
} from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Region } from 'src/app/models/region.enum';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { UsersService } from 'src/app/services/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { AdmindialogentrepreneurComponent } from 'src/app/components/admindialogentrepreneur/admindialogentrepreneur.component';
import { EntrepreneurService } from 'src/app/services/entrepreneur.service';


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
  selector: 'app-admindashboardentrepreneurview',
  templateUrl: './admindashboardentrepreneurview.component.html',
  styleUrls: ['./admindashboardentrepreneurview.component.scss'],
})
export class AdmindashboardentrepreneurviewComponent implements OnInit {
  ELEMENT_DATA: Entrepreneur[];
  dataSource: MatTableDataSource<Entrepreneur>;
  displayedColumns: string[] = [
    'id',
    'name',
    'last_name',
    'birth_date',
    'email',
    'gender',
    'region',
    'services',
    'button'
  ];
  ngOnInit(): void {
    this.loadServices();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async loadServices() {
    this.ELEMENT_DATA = await this.userc.getEntrepreneurs().toPromise();
    this.dataSource = new MatTableDataSource<Entrepreneur>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private userc: EntrepreneurService, public dialog: MatDialog) {
    this.dataSource=new MatTableDataSource<Entrepreneur>();
    this.ELEMENT_DATA = [];
  }

  openDialog(id:number) {
    let dialogref=this.dialog.open(AdmindialogentrepreneurComponent,{
      data:{
        id: id
      }
    });
    dialogref.afterClosed().subscribe(result => {this.loadServices()});
  }

}
