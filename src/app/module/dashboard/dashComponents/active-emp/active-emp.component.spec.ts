import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEmpComponent } from './active-emp.component';

describe('ActiveEmpComponent', () => {
  let component: ActiveEmpComponent;
  let fixture: ComponentFixture<ActiveEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
