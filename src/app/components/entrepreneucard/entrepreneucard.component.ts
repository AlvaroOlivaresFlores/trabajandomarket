import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-entrepreneucard',
  templateUrl: './entrepreneucard.component.html',
  styleUrls: ['./entrepreneucard.component.scss']
})
export class EntrepreneucardComponent implements OnInit {

  constructor(private myServices: ServicesService) { 
    this.service = new Service("","",0,0,Category.NONE,["",""],false,0,0);
  }

  ngOnInit(): void {
  }
  @Input() service: Service;

  categoryStr(): string {
    if (this.service.category.toString() === "DIGITALMARKETING") {
      return "Marketing Digital"
    } else if (this.service.category.toString() === "GRAPHICDESING") {
      return "Diseño Grafico"
    } else if (this.service.category.toString() === "VIDEOEDITING") {
      return "Edicion de Video"
    } else if (this.service.category.toString() === "WEBDEVELOPMENT") {
      return "Desarollo Web"
    } else {
      return "NONE"
    }
  }
}