import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacilityFormComponent } from './add-facility-form.component';

describe('AddFacilityFormComponent', () => {
  let component: AddFacilityFormComponent;
  let fixture: ComponentFixture<AddFacilityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFacilityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFacilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
