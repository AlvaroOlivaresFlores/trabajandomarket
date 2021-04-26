import { ChangeDetectorRef, Component, ViewChild, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required components
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
  selector: 'app-serviceslider',
  templateUrl: './serviceslider.component.html',
  styleUrls: ['./serviceslider.component.scss'],
})
export class ServicesliderComponent implements OnInit {

  
  ngOnInit() {}


}
