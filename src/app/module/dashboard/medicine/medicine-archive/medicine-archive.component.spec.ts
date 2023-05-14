import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineArchiveComponent } from './medicine-archive.component';

describe('MedicineArchiveComponent', () => {
  let component: MedicineArchiveComponent;
  let fixture: ComponentFixture<MedicineArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
