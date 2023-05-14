import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedPatientComponent } from './blocked-patient.component';

describe('BlockedPatientComponent', () => {
  let component: BlockedPatientComponent;
  let fixture: ComponentFixture<BlockedPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockedPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
