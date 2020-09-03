import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicContactCreateComponent } from './clinic-contact-create.component';

describe('ClinicContactCreateComponent', () => {
  let component: ClinicContactCreateComponent;
  let fixture: ComponentFixture<ClinicContactCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicContactCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicContactCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
