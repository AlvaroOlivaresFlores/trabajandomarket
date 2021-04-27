import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurdialogComponent } from './entrepreneurdialog.component';

describe('EntrepreneurdialogComponent', () => {
  let component: EntrepreneurdialogComponent;
  let fixture: ComponentFixture<EntrepreneurdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
