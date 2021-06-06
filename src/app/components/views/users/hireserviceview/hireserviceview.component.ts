import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-hireserviceview',
  templateUrl: './hireserviceview.component.html',
  styleUrls: ['./hireserviceview.component.scss']
})
export class HireserviceviewComponent implements OnInit {

  service: Service

  constructor(private selectedService: ServicesService) { 
    this.service = new Service(0,"","",0,0,Category.NONE,["",""],false,0);
  }

  ngOnInit(): void {
    this.service = this.selectedService.getServiceSelected();
  }

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
