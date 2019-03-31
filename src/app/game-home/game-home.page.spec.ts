import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHomePage } from './game-home.page';

describe('GameHomePage', () => {
  let component: GameHomePage;
  let fixture: ComponentFixture<GameHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
