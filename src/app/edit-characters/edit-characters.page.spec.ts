import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCharactersPage } from './edit-characters.page';

describe('EditCharactersPage', () => {
  let component: EditCharactersPage;
  let fixture: ComponentFixture<EditCharactersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCharactersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
