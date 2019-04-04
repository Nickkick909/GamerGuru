import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharacterPage } from './add-character.page';

describe('AddCharacterPage', () => {
  let component: AddCharacterPage;
  let fixture: ComponentFixture<AddCharacterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCharacterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
