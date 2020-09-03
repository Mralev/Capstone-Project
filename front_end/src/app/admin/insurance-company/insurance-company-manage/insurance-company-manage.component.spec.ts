import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCompanyManageComponent } from './insurance-company-manage.component';

describe('InsuranceCompanyManageComponent', () => {
  let component: InsuranceCompanyManageComponent;
  let fixture: ComponentFixture<InsuranceCompanyManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceCompanyManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCompanyManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
