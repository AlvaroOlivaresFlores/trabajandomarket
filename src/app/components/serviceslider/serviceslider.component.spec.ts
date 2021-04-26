import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesliderComponent } from './serviceslider.component';

describe('ServicesliderComponent', () => {
  let component: ServicesliderComponent;
  let fixture: ComponentFixture<ServicesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
