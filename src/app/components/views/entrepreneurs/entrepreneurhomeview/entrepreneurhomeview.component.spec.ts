import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurhomeviewComponent } from './entrepreneurhomeview.component';

describe('EntrepreneurhomeviewComponent', () => {
  let component: EntrepreneurhomeviewComponent;
  let fixture: ComponentFixture<EntrepreneurhomeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurhomeviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurhomeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
