import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdditFacilityComponent } from './eddit-facility.component';

describe('EdditFacilityComponent', () => {
  let component: EdditFacilityComponent;
  let fixture: ComponentFixture<EdditFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdditFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdditFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
