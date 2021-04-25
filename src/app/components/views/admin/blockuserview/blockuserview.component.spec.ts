import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockuserviewComponent } from './blockuserview.component';

describe('BlockuserviewComponent', () => {
  let component: BlockuserviewComponent;
  let fixture: ComponentFixture<BlockuserviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockuserviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockuserviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
