import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFolderComponent } from './media-folder.component';

describe('MediaFolderComponent', () => {
  let component: MediaFolderComponent;
  let fixture: ComponentFixture<MediaFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
