import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHotelInfoComponent } from './add-hotel-info.component';

describe('AddHotelInfoComponent', () => {
  let component: AddHotelInfoComponent;
  let fixture: ComponentFixture<AddHotelInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHotelInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHotelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
