import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { Request } from 'src/app/models/request';
import { User } from 'src/app/models/user';
import { Service } from 'src/app/models/service';
import { EntrepreneurService } from 'src/app/services/entrepreneur.service';
import { RequestService } from 'src/app/services/request.service';
import { ServicesService } from 'src/app/services/services.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-entrepreneurtable',
  templateUrl: './entrepreneurtable.component.html',
  styleUrls: ['./entrepreneurtable.component.scss']
})
export class EntrepreneurtableComponent implements OnInit {

  public services: Array<Service> = [];
  public myservices: Array<User> = [];
  dataSource: MatTableDataSource<User>;
  public entrepreneurs: Array<Entrepreneur> = [];
  requests: Array<Request> = [];
  users: Array<User>= [];

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
  constructor(private service: ServicesService, public dialog: MatDialog, private entrepreneurC: EntrepreneurService, private requestsService: RequestService, private usersService: UsersService ) {
    this.dataSource = new MatTableDataSource<User>();
    this.services = [];
  }
  async loadEntrepreneurs() { //ok
    this.services = await this.service.getServices().toPromise();
    this.entrepreneurs = await this.entrepreneurC.getUsers().toPromise();
    this.requests = await this.requestsService.getRequests().toPromise();
    this.users = await this.usersService.getUsers().toPromise();
    this.loadServices();
    
  }
  async loadServices(){
    // console.log(this.entrepreneurs[0].name)



    this.entrepreneurs.forEach(e => {
      if (e.id === 1) {
        this.requests.forEach(r => {
          this.users.forEach(u => {
            if (r.idUser == u.id) {
              console.log(u.name)
                  this.myservices.push(u)
            }
          })
        })        
      }
    })

    
    this.dataSource = new MatTableDataSource<User>(this.myservices);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
}