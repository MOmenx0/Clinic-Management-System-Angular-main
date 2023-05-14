import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDocComponent } from './active-doc.component';

describe('ActiveDocComponent', () => {
  let component: ActiveDocComponent;
  let fixture: ComponentFixture<ActiveDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
