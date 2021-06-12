import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-servicecard',
  templateUrl: './servicecard.component.html',
  styleUrls: ['./servicecard.component.scss'],
})
export class ServicecardComponent implements OnInit {
  ngOnInit(): void {}

  @Input() service: Service;

  constructor() {
    this.service = new Service(
      '',
      '',
      0,
      0,
      Category.NONE,
      ['', ''],
      false,
      0,
      0
    );
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

  changeSelectedService() {
    const serviceId = localStorage.setItem('s', this.service.id.toString());
    const entrepreneurId = localStorage.setItem(
      'e',
      this.service.entrepreneurId.toString()
    );
  }
}
