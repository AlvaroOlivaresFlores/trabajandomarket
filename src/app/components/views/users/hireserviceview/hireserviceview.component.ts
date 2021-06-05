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
    this.service = new Service(0,"","",0,0,Category.NONE,["",""],false);
  }

  ngOnInit(): void {
    this.service = this.selectedService.getServiceSelected();
  }

}
