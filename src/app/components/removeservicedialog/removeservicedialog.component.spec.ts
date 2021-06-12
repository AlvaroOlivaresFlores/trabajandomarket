import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveservicedialogComponent } from './removeservicedialog.component';

describe('RemoveservicedialogComponent', () => {
  let component: RemoveservicedialogComponent;
  let fixture: ComponentFixture<RemoveservicedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveservicedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveservicedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
