import { ChangeDetectorRef, Component, ViewChild, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';
import { SwiperComponent } from 'swiper/angular';


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
  selector: 'app-serviceslider',
  templateUrl: './serviceslider.component.html',
  styleUrls: ['./serviceslider.component.scss'],
})
export class ServicesliderComponent implements OnInit {

  public services:Array<Service> = [];
  public favoriteServices:Array<Service> = [];

  constructor(private service : ServicesService) {

  }
  
  ngOnInit(): void {
    this.loadServices();
  }

  async loadServices() {
    this.services = await this.service.getServices().toPromise();
    this.favoriteServices = this.services.sort((a,b)=> (b.rating - a.rating)).slice(0, 10)
  }


}
