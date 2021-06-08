import { TestBed } from '@angular/core/testing';

import { PageinfoService } from './pageinfo.service';

describe('PageinfoService', () => {
  let service: PageinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
