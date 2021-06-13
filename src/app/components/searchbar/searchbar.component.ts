import {
  Component,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  category: string = '';
  searchText: string = '';
  isSticky: boolean = false;

  @Output() event = new EventEmitter<string>();
  @Output() event2 = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 65;
  }

  async sendSearchText() {
    await console.log(this.searchText);
    this.event.emit(this.searchText);
  }

  changeCategory() {
    this.event2.emit(this.category);
  }
}
