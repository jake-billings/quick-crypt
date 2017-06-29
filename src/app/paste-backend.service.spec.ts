import { TestBed, inject } from '@angular/core/testing';

import { PasteBackendService } from './paste-backend.service';

describe('PasteBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasteBackendService]
    });
  });

  it('should be created', inject([PasteBackendService], (service: PasteBackendService) => {
    expect(service).toBeTruthy();
  }));
});
