import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurtableComponent } from './entrepreneurtable.component';

describe('EntrepreneurtableComponent', () => {
  let component: EntrepreneurtableComponent;
  let fixture: ComponentFixture<EntrepreneurtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
