import { Component, Input, OnInit } from '@angular/core';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { Region } from 'src/app/models/region.enum';
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

  currentUser: number = 1;
  myServices: Array<Service> = [];

  public entrepreneur: Entrepreneur;
  ngOnInit(): void {
    this.loadSerices();
  }

  constructor(
    private entrepreneursService: EntrepreneurService
  ) {
    this.entrepreneur = new Entrepreneur("","",new Date,"","",Region.REGIONMETROPOLITANA,[],[],"","","",false,0)
  }

  async loadSerices() {
    this.entrepreneur = await this.entrepreneursService.getEntrepreneur(this.currentUser).toPromise();
    this.myServices = this.entrepreneur.services;
  }

}
