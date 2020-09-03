import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicDisplayWebloginsDatatableComponent } from './clinic-display-weblogins-datatable.component';

describe('ClinicDisplayWebloginsDatatableComponent', () => {
  let component: ClinicDisplayWebloginsDatatableComponent;
  let fixture: ComponentFixture<ClinicDisplayWebloginsDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicDisplayWebloginsDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicDisplayWebloginsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
