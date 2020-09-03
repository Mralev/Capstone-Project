import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDropboxComponent } from './home-dropbox.component';

describe('HomeDropboxComponent', () => {
  let component: HomeDropboxComponent;
  let fixture: ComponentFixture<HomeDropboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDropboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDropboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
