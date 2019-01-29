import { TestBed } from '@angular/core/testing';

import { JeneverServiceService } from './jenever-service.service';

describe('JeneverServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JeneverServiceService = TestBed.get(JeneverServiceService);
    expect(service).toBeTruthy();
  });
});
