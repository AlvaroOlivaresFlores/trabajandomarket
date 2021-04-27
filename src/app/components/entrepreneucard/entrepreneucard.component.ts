import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entrepreneucard',
  templateUrl: './entrepreneucard.component.html',
  styleUrls: ['./entrepreneucard.component.scss']
})
export class EntrepreneucardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;
  @Input() link: string;
  @Input() myprice: string;
  
  constructor() { 
    this.title = 'Service Name';
    this.myprice = "0";
    this.link = 'http://placekitten.com/300/300';
    this.content = 'Service Description';
    this.subtitle = 'Service Category';
  }
  ngOnInit(): void {
  }
}
