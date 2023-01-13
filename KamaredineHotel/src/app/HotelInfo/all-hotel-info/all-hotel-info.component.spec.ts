import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHotelInfoComponent } from './all-hotel-info.component';

describe('AllHotelInfoComponent', () => {
  let component: AllHotelInfoComponent;
  let fixture: ComponentFixture<AllHotelInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHotelInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHotelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
