import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLoginsCreateComponent } from './website-logins-create.component';

describe('WebsiteLoginsCreateComponent', () => {
  let component: WebsiteLoginsCreateComponent;
  let fixture: ComponentFixture<WebsiteLoginsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteLoginsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteLoginsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
