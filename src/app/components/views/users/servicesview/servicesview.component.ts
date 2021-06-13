import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-servicesview',
  templateUrl: './servicesview.component.html',
  styleUrls: ['./servicesview.component.scss'],
})
export class ServicesviewComponent implements OnInit {
  services: Array<Service> = [];
  searchText: string = '';
  category: string = '';
  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  async loadServices() {
    this.services = await this.service.getServices().toPromise();
  }

  receiveSearchText($event: string) {
    this.searchText = $event;
  }

  changeCategory($event2: string) {
    this.category = $event2;
    // console.log(this.category);

    // if (this.category === 'DIGITALMARKETING') {
    //   this.services = this.services.filter((s) => {
    //     return s.category.toString() === 'DIGITALMARKETING';
    //   });
    // } else if (this.category === 'GRAPHICDESING') {
    //   this.services = this.services.filter((s) => {
    //     return s.category.toString() === 'GRAPHICDESING';
    //   });
    // } else {
    //   this.loadServices();
    // }
  }
}
