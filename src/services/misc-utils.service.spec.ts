import { TestBed } from '@angular/core/testing';

import { MiscUtilsService } from './misc-utils.service';

describe('MiscUtilsService', () => {
  let service: MiscUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
