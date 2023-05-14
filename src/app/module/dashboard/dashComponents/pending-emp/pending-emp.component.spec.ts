import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingEmpComponent } from './pending-emp.component';

describe('PendingEmpComponent', () => {
  let component: PendingEmpComponent;
  let fixture: ComponentFixture<PendingEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
