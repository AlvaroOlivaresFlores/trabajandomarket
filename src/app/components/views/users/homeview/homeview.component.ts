import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.scss']
})
export class HomeviewComponent implements OnInit {

  public services:Array<Service> = [];
  public favoriteServices:Array<Service> = [];
  public lowerPriceServices:Array<Service> = [];

  constructor(private service : ServicesService) {

  }

    
  ngOnInit(): void {
    this.loadServices();
  }

  async loadServices() {
    this.services = await this.service.getServices().toPromise();
    this.favoriteServices = this.services.sort((a,b)=> (b.rating - a.rating)).slice(0, 10)
    this.lowerPriceServices = this.services.sort((a,b)=> (a.price - b.price)).slice(0, 10)
  }

}
