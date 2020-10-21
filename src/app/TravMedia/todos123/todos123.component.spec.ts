import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos123Component } from './todos123.component';

describe('Todos123Component', () => {
  let component: Todos123Component;
  let fixture: ComponentFixture<Todos123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todos123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todos123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
