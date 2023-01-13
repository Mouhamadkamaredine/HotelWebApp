import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFacilityComponent } from './all-facility.component';

describe('AllFacilityComponent', () => {
  let component: AllFacilityComponent;
  let fixture: ComponentFixture<AllFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
