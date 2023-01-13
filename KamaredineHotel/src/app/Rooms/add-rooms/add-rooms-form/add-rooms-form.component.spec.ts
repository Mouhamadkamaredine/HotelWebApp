import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomsFormComponent } from './add-rooms-form.component';

describe('AddRoomsFormComponent', () => {
  let component: AddRoomsFormComponent;
  let fixture: ComponentFixture<AddRoomsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoomsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
