import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicAdminCreateOfficeHourComponent } from './clinic-admin-create-office-hour.component';

describe('ClinicAdminCreateOfficeHourComponent', () => {
  let component: ClinicAdminCreateOfficeHourComponent;
  let fixture: ComponentFixture<ClinicAdminCreateOfficeHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicAdminCreateOfficeHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicAdminCreateOfficeHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
