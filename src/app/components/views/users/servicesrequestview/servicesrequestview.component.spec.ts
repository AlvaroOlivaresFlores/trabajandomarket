import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesrequestviewComponent } from './servicesrequestview.component';

describe('ServicesrequestviewComponent', () => {
  let component: ServicesrequestviewComponent;
  let fixture: ComponentFixture<ServicesrequestviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesrequestviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesrequestviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
