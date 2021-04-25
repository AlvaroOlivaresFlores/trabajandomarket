import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordviewComponent } from './forgotpasswordview.component';

describe('ForgotpasswordviewComponent', () => {
  let component: ForgotpasswordviewComponent;
  let fixture: ComponentFixture<ForgotpasswordviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpasswordviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
