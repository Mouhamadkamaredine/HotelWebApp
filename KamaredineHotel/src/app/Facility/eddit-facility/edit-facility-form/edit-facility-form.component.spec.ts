import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacilityFormComponent } from './edit-facility-form.component';

describe('EditFacilityFormComponent', () => {
  let component: EditFacilityFormComponent;
  let fixture: ComponentFixture<EditFacilityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFacilityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFacilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
