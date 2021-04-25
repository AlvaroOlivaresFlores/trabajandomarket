import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredservicesviewComponent } from './hiredservicesview.component';

describe('HiredservicesviewComponent', () => {
  let component: HiredservicesviewComponent;
  let fixture: ComponentFixture<HiredservicesviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredservicesviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredservicesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
