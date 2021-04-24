import { TestBed } from '@angular/core/testing';

import { WikiservService } from './wikiserv.service';

describe('WikiservService', () => {
  let service: WikiservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikiservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
