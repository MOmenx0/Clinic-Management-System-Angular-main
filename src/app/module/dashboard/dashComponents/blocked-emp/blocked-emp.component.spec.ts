import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedEmpComponent } from './blocked-emp.component';

describe('BlockedEmpComponent', () => {
  let component: BlockedEmpComponent;
  let fixture: ComponentFixture<BlockedEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockedEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
