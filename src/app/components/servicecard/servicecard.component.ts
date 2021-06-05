import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-servicecard',
  templateUrl: './servicecard.component.html',
  styleUrls: ['./servicecard.component.scss'],
})
export class ServicecardComponent implements OnInit {
  
  ngOnInit(): void {}
  
  @Input() name: string;
  @Input() description: string;
  @Input() img: string;
  @Input() price: number;
  @Input() category: Category;
  @Input() rating: number;
  @Input() service: Service;



  constructor(private selectedService: ServicesService) {
    this.name = 'Service Name';
    this.price = 0;
    this.img = '';
    this.description = 'Service Description';
    this.category = Category.NONE;
    this.rating = 0;
    this.service = new Service(0,"","",0,0,Category.NONE,["",""],false);
  }

  priceToClp() {
    this.price.toString();
  }
  categoryStr(): string {
    if (this.category.toString() === "DIGITALMARKETING") {
      return "DIGITAL MARKETING"
    } else if (this.category.toString() === "GRAPHICDESING") {
      return "GRAPHIC DESING"
    } else if (this.category.toString() === "VIDEOEDITING") {
      return "VIDEO EDITING"
    } else if (this.category.toString() === "WEBDEVELOPMENT") {
      return "WEB DEVELOPMENT"
    } else {
      return "NONE"
    }
  }
  changeSelectedService() {
    this.selectedService.setServiceSelected(this.service)
  }

}
