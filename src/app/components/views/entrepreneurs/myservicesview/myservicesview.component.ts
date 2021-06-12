import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { Entrepreneur } from 'src/app/models/entrepreneur';
import { EntrepreneurService } from 'src/app/services/entrepreneur.service';



@Component({
  selector: 'app-myservicesview',
  templateUrl: './myservicesview.component.html',
  styleUrls: ['./myservicesview.component.scss'],
})
export class MyservicesviewComponent implements OnInit {

  public entrepreneurs:Array<Entrepreneur> = [];

  constructor(private entrepreneur : EntrepreneurService) {}

  ngOnInit(): void {
    this.loadEntrepreneurs();
  }

  async loadEntrepreneurs() {
    this.entrepreneurs = await this.entrepreneur.getEntrepreneurs().toPromise();
  }
}