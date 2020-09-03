import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinincDisplayContactDatatableComponent } from './clininc-display-contact-datatable.component';

describe('ClinincDisplayContactDatatableComponent', () => {
  let component: ClinincDisplayContactDatatableComponent;
  let fixture: ComponentFixture<ClinincDisplayContactDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinincDisplayContactDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinincDisplayContactDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
