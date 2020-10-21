import { TestBed } from '@angular/core/testing';

import { BluePrintService } from './blue-print.service';

describe('BluePrintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BluePrintService = TestBed.get(BluePrintService);
    expect(service).toBeTruthy();
  });
});
