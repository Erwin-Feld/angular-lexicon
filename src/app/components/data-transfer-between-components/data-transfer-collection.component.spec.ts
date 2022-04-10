import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransferCollectionComponent } from './data-transfer-collection.component';

describe('DataTransferCollectionComponent', () => {
  let component: DataTransferCollectionComponent;
  let fixture: ComponentFixture<DataTransferCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTransferCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTransferCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
