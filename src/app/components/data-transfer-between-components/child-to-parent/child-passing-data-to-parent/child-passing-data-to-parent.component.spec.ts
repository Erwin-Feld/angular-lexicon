import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPassingDataToParentComponent } from './child-passing-data-to-parent.component';

describe('ChildPassingDataToParentComponent', () => {
  let component: ChildPassingDataToParentComponent;
  let fixture: ComponentFixture<ChildPassingDataToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPassingDataToParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPassingDataToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
