import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemsPage } from './edit-items.page';

describe('EditItemsPage', () => {
  let component: EditItemsPage;
  let fixture: ComponentFixture<EditItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
