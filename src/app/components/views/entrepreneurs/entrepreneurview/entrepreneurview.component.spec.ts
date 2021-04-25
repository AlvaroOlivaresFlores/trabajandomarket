import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurviewComponent } from './entrepreneurview.component';

describe('EntrepreneurviewComponent', () => {
  let component: EntrepreneurviewComponent;
  let fixture: ComponentFixture<EntrepreneurviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
