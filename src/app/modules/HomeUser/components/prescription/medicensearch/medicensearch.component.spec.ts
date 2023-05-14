import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicensearchComponent } from './medicensearch.component';

describe('MedicensearchComponent', () => {
  let component: MedicensearchComponent;
  let fixture: ComponentFixture<MedicensearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicensearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicensearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
