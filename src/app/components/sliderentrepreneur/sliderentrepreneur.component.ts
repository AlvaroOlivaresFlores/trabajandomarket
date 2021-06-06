import { Component, Input, OnInit } from '@angular/core';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { Service } from 'src/app/models/service';
import { EntrepreneurService } from 'src/app/services/entrepreneur.service';
import { ServicesService } from 'src/app/services/services.service';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper/core';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);
@Component({
  selector: 'app-sliderentrepreneur',
  templateUrl: './sliderentrepreneur.component.html',
  styleUrls: ['./sliderentrepreneur.component.scss'],
})

export class SliderentrepreneurComponent implements OnInit {


  public services: Array<Service> = [];
  public myServices: Array<Service> = [];
  public entrepreneurs: Array<Entrepreneur> = [];

  ngOnInit(): void {
    this.loadEntrepreneurs();
  }

  constructor(private service: ServicesService, 
    private entrepreneurC: EntrepreneurService) {
    }

  async loadEntrepreneurs() { //ok
    this.services = await this.service.getServices().toPromise();
    this.entrepreneurs = await this.entrepreneurC.getUsers().toPromise();
    this.loadmyService();
  }
  async loadmyService(){

    for(let i = 0; i<this.services.length; i++){
      for(let j =0; j<this.entrepreneurs[0].services.length;j++){
        if(this.services[i].id == this.entrepreneurs[0].services[j]){
          this.myServices.push(this.services[i])
        }
      }
    }
  }

}