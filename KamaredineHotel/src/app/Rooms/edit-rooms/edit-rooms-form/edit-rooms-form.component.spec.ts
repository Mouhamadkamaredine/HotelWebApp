import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoomsFormComponent } from './edit-rooms-form.component';

describe('EditRoomsFormComponent', () => {
  let component: EditRoomsFormComponent;
  let fixture: ComponentFixture<EditRoomsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRoomsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoomsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
