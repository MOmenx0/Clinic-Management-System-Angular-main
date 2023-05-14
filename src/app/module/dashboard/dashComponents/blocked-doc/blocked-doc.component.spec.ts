import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedDocComponent } from './blocked-doc.component';

describe('BlockedDocComponent', () => {
  let component: BlockedDocComponent;
  let fixture: ComponentFixture<BlockedDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockedDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
