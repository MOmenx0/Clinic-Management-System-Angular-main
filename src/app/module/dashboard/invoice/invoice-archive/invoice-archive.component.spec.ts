import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceArchiveComponent } from './invoice-archive.component';

describe('InvoiceArchiveComponent', () => {
  let component: InvoiceArchiveComponent;
  let fixture: ComponentFixture<InvoiceArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
