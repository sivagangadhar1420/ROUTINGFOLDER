import { TestBed } from '@angular/core/testing';

import { FetchApisService } from './fetch-apis.service';

describe('FetchApisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchApisService = TestBed.get(FetchApisService);
    expect(service).toBeTruthy();
  });
});
