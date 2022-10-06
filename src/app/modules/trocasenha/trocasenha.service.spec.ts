import { TestBed } from '@angular/core/testing';

import { TrocasenhaService } from './trocasenha.service';

describe('TrocasenhaService', () => {
  let service: TrocasenhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrocasenhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
