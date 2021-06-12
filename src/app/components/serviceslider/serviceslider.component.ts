import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/models/service';

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
  @Input() services: Array<Service> = [];

  constructor() {}

  ngOnInit(): void {}
}
