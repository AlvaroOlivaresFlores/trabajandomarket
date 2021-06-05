import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-servicesview',
  templateUrl: './servicesview.component.html',
  styleUrls: ['./servicesview.component.scss'],
})
export class ServicesviewComponent implements OnInit {
  public services:Array<Service> = [];

  constructor(private service : ServicesService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  async loadServices() {
    this.services = await this.service.getServices().toPromise();
  }
}
