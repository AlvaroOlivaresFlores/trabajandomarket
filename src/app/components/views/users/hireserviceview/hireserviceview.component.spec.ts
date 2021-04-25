import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireserviceviewComponent } from './hireserviceview.component';

describe('HireserviceviewComponent', () => {
  let component: HireserviceviewComponent;
  let fixture: ComponentFixture<HireserviceviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireserviceviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireserviceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
