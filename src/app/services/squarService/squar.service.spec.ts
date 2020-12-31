import { TestBed } from '@angular/core/testing';

import { SquarService } from './squar.service';

describe('SquarService', () => {
  let service: SquarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
