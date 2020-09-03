import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicDisplayPageComponent } from './clinic-display-page.component';

describe('ClinicDisplayPageComponent', () => {
  let component: ClinicDisplayPageComponent;
  let fixture: ComponentFixture<ClinicDisplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicDisplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
