import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacilityComponent } from './addfacility.component';

describe('AddfacilityComponent', () => {
  let component: AddfacilityComponent;
  let fixture: ComponentFixture<AddfacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
