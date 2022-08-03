import { TestBed } from '@angular/core/testing';

import { CmfApiService } from './cmf-api.service';

describe('CmfApiService', () => {
  let service: CmfApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmfApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
