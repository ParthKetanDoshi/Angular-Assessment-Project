import { TestBed } from '@angular/core/testing';

import { UserfetchService } from './userfetch.service';

describe('UserfetchService', () => {
  let service: UserfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
