import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTodosComponent } from './final-todos.component';

describe('FinalTodosComponent', () => {
  let component: FinalTodosComponent;
  let fixture: ComponentFixture<FinalTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
