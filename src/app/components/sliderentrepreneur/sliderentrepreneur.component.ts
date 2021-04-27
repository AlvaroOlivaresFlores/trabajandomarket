import { Component, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
}
