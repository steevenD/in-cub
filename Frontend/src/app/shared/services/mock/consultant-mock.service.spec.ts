import { TestBed } from '@angular/core/testing';

import { ConsultantMockService } from './consultant-mock.service';

describe('ConsultantMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultantMockService = TestBed.get(ConsultantMockService);
    expect(service).toBeTruthy();
  });
});
