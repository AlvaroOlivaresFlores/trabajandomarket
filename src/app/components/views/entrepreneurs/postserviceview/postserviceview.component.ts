import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postserviceview',
  templateUrl: './postserviceview.component.html',
  styleUrls: ['./postserviceview.component.scss']
})
export class PostserviceviewComponent implements OnInit {

  completed = false;
  constructor() { }

  
  completeStep(){
    this.completed = true;
  }

  ngOnInit(): void {
  }

}
