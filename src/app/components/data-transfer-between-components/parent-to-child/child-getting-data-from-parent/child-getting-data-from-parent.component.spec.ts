import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildGettingDataFromParentComponent } from './child-getting-data-from-parent.component';

describe('ChildGettingDataFromParentComponent', () => {
  let component: ChildGettingDataFromParentComponent;
  let fixture: ComponentFixture<ChildGettingDataFromParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildGettingDataFromParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildGettingDataFromParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
