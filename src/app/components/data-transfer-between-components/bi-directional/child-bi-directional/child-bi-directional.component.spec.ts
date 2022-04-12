import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBiDirectionalComponent } from './child-bi-directional.component';

describe('ChildBiDirectionalComponent', () => {
  let component: ChildBiDirectionalComponent;
  let fixture: ComponentFixture<ChildBiDirectionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBiDirectionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBiDirectionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
