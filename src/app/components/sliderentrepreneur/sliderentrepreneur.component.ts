import { Component, OnInit } from '@angular/core';
import { Entrepreneur } from 'src/app/models/entrepreneur';

import { Service } from 'src/app/models/service';
import { AuthService } from 'src/app/services/auth.service';
import { EntrepreneurService } from 'src/app/services/entrepreneur.service';

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
  selector: 'app-sliderentrepreneur',
  templateUrl: './sliderentrepreneur.component.html',
  styleUrls: ['./sliderentrepreneur.component.scss'],
})
export class SliderentrepreneurComponent implements OnInit {
  myServices: Array<Service> = [];
  entrepreneur: Array<Entrepreneur>


  ngOnInit(): void {
    this.loadSerices();
  }

  constructor(private entrepreneursService: EntrepreneurService, private authService: AuthService) {
    this.entrepreneur = []
  }

  async loadSerices() {
    this.entrepreneur = await this.entrepreneursService
      .getEntrepreneurByUserId(this.authService.getCurrentUser().id)
      .toPromise();
    this.myServices = this.entrepreneur[0].services;
  }
}
