import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderentrepreneurComponent } from './sliderentrepreneur.component';

describe('SliderentrepreneurComponent', () => {
  let component: SliderentrepreneurComponent;
  let fixture: ComponentFixture<SliderentrepreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderentrepreneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderentrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
