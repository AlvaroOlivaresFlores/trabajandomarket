import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.scss']
})
export class HomeviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostviewed = [
    {
      name: 'service 1'
    },
    {
      name: 'service 2'
    },
    {
      name: 'service 3'
    },
    {
      name: 'service 4'
    }
  ] 

}
