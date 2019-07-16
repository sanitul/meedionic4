import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSummaryPage } from './dashboard-summary.page';

describe('DashboardSummaryPage', () => {
  let component: DashboardSummaryPage;
  let fixture: ComponentFixture<DashboardSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
