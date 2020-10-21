import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertdangerComponent } from './alertdanger.component';

describe('AlertdangerComponent', () => {
  let component: AlertdangerComponent;
  let fixture: ComponentFixture<AlertdangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertdangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertdangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
