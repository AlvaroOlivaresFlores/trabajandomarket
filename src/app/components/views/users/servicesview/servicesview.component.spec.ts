import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesviewComponent } from './servicesview.component';

describe('ServicesviewComponent', () => {
  let component: ServicesviewComponent;
  let fixture: ComponentFixture<ServicesviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
