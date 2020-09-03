import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClinicsPageComponent } from './admin-clinics-page.component';

describe('AdminClinicsPageComponent', () => {
  let component: AdminClinicsPageComponent;
  let fixture: ComponentFixture<AdminClinicsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClinicsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClinicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
