import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBiDirectionalComponent } from './parent-bi-directional.component';

describe('ParentBiDirectionalComponent', () => {
  let component: ParentBiDirectionalComponent;
  let fixture: ComponentFixture<ParentBiDirectionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentBiDirectionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBiDirectionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
