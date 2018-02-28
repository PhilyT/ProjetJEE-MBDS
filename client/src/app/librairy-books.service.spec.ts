import { TestBed, inject } from '@angular/core/testing';

import { LibrairyBooksService } from './librairy-books.service';

describe('LibrairyBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibrairyBooksService]
    });
  });

  it('should be created', inject([LibrairyBooksService], (service: LibrairyBooksService) => {
    expect(service).toBeTruthy();
  }));
});
