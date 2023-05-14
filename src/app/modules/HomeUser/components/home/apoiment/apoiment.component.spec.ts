import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoimentComponent } from './apoiment.component';

describe('ApoimentComponent', () => {
  let component: ApoimentComponent;
  let fixture: ComponentFixture<ApoimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
