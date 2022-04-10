import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPassingDataToChildComponent } from './parent-passing-data-to-child.component';

describe('ParentPassingDataToChildComponent', () => {
  let component: ParentPassingDataToChildComponent;
  let fixture: ComponentFixture<ParentPassingDataToChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentPassingDataToChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPassingDataToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
