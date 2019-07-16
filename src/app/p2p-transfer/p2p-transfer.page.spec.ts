import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pTransferPage } from './p2p-transfer.page';

describe('P2pTransferPage', () => {
  let component: P2pTransferPage;
  let fixture: ComponentFixture<P2pTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2pTransferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2pTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
