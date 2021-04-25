import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyservicesviewComponent } from './myservicesview.component';

describe('MyservicesviewComponent', () => {
  let component: MyservicesviewComponent;
  let fixture: ComponentFixture<MyservicesviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyservicesviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyservicesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
