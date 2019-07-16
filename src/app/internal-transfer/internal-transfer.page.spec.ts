import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTransferPage } from './internal-transfer.page';

describe('InternalTransferPage', () => {
  let component: InternalTransferPage;
  let fixture: ComponentFixture<InternalTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalTransferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
