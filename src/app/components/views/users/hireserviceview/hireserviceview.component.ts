import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { Service } from 'src/app/models/service';
import { EntrepreneurService } from 'src/app/services/entrepreneur.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-hireserviceview',
  templateUrl: './hireserviceview.component.html',
  styleUrls: ['./hireserviceview.component.scss'],
})
export class HireserviceviewComponent implements OnInit {
  service: Service;
  entrepreneurs: Array<Entrepreneur>;
  ename: string;

  constructor(
    private selectedService: ServicesService,
    private entrepreneursService: EntrepreneurService
  ) {
    this.service = new Service('', '', 0, 0, Category.NONE, ['', ''], false, 0,0);
    this.entrepreneurs = [];
    this.ename = '';
  }

  ngOnInit(): void {
    this.service = this.selectedService.getServiceSelected();
    this.loadEntrepreneurs();
  }

  categoryStr(): string {
    if (this.service.category.toString() === 'DIGITALMARKETING') {
      return 'Marketing Digital';
    } else if (this.service.category.toString() === 'GRAPHICDESING') {
      return 'Diseño Grafico';
    } else if (this.service.category.toString() === 'VIDEOEDITING') {
      return 'Edicion de Video';
    } else if (this.service.category.toString() === 'WEBDEVELOPMENT') {
      return 'Desarollo Web';
    } else {
      return 'NONE';
    }
  }

  async loadEntrepreneurs() {
    this.entrepreneurs = await this.entrepreneursService.getEntrepreneurs().toPromise();
    this.entrepreneurs.forEach((e) => {
      console.log(e.firstname)
      e.services.forEach((s) => {
        console.log(s)
        if ((s.id === this.service.id)) {
          this.ename = e.firstname;
        }
      });
    });
  }
  requestService() {
    
  }
}
