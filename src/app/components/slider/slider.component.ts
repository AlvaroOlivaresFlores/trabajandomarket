import { Component, ViewChild } from '@angular/core';
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
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  thumbsSwiper: any;
  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }

}
