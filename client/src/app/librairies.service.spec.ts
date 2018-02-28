import { TestBed, inject } from '@angular/core/testing';

import { LibrairiesService } from './librairies.service';

describe('LibrairiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibrairiesService]
    });
  });

  it('should be created', inject([LibrairiesService], (service: LibrairiesService) => {
    expect(service).toBeTruthy();
  }));
});
