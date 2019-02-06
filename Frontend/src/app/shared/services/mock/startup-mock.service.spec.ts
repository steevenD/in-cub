import { TestBed } from '@angular/core/testing';

import { StartupMockService } from './startup-mock.service';

describe('StartupMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartupMockService = TestBed.get(StartupMockService);
    expect(service).toBeTruthy();
  });
});
