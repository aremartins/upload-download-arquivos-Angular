/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DipService } from './dip.service';

describe('Service: Dip', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DipService]
    });
  });

  it('should ...', inject([DipService], (service: DipService) => {
    expect(service).toBeTruthy();
  }));
});
