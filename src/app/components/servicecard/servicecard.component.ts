import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servicecard',
  templateUrl: './servicecard.component.html',
  styleUrls: ['./servicecard.component.scss'],
})
export class ServicecardComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() img: string;
  @Input() price: number;
  @Input() category: string;
  @Input() rate: string;

  constructor() {
    this.name = 'Service Name';
    this.price = 0;
    this.img = 'http://placekitten.com/300/300';
    this.description = 'Service Description';
    this.category = 'Service Category';
    this.rate = '5.4';
  }

  ngOnInit(): void {}
}
