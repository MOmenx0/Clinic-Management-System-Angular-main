import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddediteformComponent } from './addediteform.component';

describe('AddediteformComponent', () => {
  let component: AddediteformComponent;
  let fixture: ComponentFixture<AddediteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddediteformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddediteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
