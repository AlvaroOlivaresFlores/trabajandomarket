import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { Service } from 'src/app/models/service';
import { AuthService } from 'src/app/services/auth.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-postserviceview',
  templateUrl: './postserviceview.component.html',
  styleUrls: ['./postserviceview.component.scss'],
})
export class PostserviceviewComponent implements OnInit {
  name: string;
  description: string;
  price: string;
  category: Category;
  deliveryTerm: string;
  images: Array<string>;
  entrepreneurId: number;
  isCompleted: boolean = false;

  constructor(
    private servicesService: ServicesService,
    private authService: AuthService
  ) {
    this.name = '';
    this.description = '';
    this.price = '';
    this.deliveryTerm = '';
    this.category = Category.NONE;
    this.images = [
      'https://via.placeholder.com/400x300/7BF0F5/000000%20?Text=Image1',
      'https://via.placeholder.com/600x300/FA88E8/000000%20?Text=Image2',
      'https://via.placeholder.com/600x300/87FA8B/000000%20?Text=Image3',
      'https://via.placeholder.com/600x300/7BF0F5/000000%20?Text=Image1',
      'https://via.placeholder.com/600x300',
    ];
    this.entrepreneurId = 0;
  }

  ngOnInit(): void {}

  async addService() {
    this.servicesService
      .addService(
        new Service(
          this.name,
          this.description,
          parseInt(this.price),
          0,
          this.category,
          this.images,
          true,
          parseInt(this.deliveryTerm),
          this.authService.getCurrentEntrepreneur().id
        )
      )
      .toPromise();
  }

  completed() {
    if (
      this.name != '' &&
      this.description != '' &&
      this.price != '' &&
      this.deliveryTerm != '' &&
      this.category != Category.NONE
    ) {
      this.isCompleted = true;
    } else {
      this.isCompleted = false;
    }
    console.log(this.isCompleted);
  }
}
