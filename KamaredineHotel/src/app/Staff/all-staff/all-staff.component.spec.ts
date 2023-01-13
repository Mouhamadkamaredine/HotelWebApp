import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStaffComponent } from './all-staff.component';

describe('AllStaffComponent', () => {
  let component: AllStaffComponent;
  let fixture: ComponentFixture<AllStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
