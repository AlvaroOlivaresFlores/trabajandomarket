import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostserviceviewComponent } from './postserviceview.component';

describe('PostserviceviewComponent', () => {
  let component: PostserviceviewComponent;
  let fixture: ComponentFixture<PostserviceviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostserviceviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostserviceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
