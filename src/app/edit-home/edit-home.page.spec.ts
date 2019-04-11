import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHomePage } from './edit-home.page';

describe('EditHomePage', () => {
  let component: EditHomePage;
  let fixture: ComponentFixture<EditHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
