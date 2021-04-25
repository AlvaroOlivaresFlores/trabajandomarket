import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginadminviewComponent } from './loginadminview.component';

describe('LoginadminviewComponent', () => {
  let component: LoginadminviewComponent;
  let fixture: ComponentFixture<LoginadminviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginadminviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginadminviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
