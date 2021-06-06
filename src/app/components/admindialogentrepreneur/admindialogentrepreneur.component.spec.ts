import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindialogentrepreneurComponent } from './admindialogentrepreneur.component';

describe('AdmindialogentrepreneurComponent', () => {
  let component: AdmindialogentrepreneurComponent;
  let fixture: ComponentFixture<AdmindialogentrepreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindialogentrepreneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindialogentrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
