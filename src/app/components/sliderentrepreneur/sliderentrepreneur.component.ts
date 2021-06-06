import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
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
import { MyservicesviewComponent } from '../views/entrepreneurs/myservicesview/myservicesview.component';

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

  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    this.loadServices();
  }
  async loadServices() {
    this.services = await this.service.getServices().toPromise();
  }
}
