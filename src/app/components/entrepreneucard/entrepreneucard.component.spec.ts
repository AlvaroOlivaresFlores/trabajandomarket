import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneucardComponent } from './entrepreneucard.component';

describe('EntrepreneucardComponent', () => {
  let component: EntrepreneucardComponent;
  let fixture: ComponentFixture<EntrepreneucardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneucardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneucardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
