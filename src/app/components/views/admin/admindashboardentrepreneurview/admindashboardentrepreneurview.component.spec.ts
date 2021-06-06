import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardentrepreneurviewComponent } from './admindashboardentrepreneurview.component';

describe('AdmindashboardentrepreneurviewComponent', () => {
  let component: AdmindashboardentrepreneurviewComponent;
  let fixture: ComponentFixture<AdmindashboardentrepreneurviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindashboardentrepreneurviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashboardentrepreneurviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
