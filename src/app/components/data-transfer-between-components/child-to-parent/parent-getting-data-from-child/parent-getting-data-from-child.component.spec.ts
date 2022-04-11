import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentGettingDataFromChildComponent } from './parent-getting-data-from-child.component';

describe('ParentGettingDataFromChildComponent', () => {
  let component: ParentGettingDataFromChildComponent;
  let fixture: ComponentFixture<ParentGettingDataFromChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentGettingDataFromChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentGettingDataFromChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
