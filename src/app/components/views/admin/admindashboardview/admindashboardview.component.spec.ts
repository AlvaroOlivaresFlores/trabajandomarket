import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardviewComponent } from './admindashboardview.component';

describe('AdmindashboardviewComponent', () => {
  let component: AdmindashboardviewComponent;
  let fixture: ComponentFixture<AdmindashboardviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindashboardviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashboardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
