import { TestBed } from '@angular/core/testing';

import { ContentProjectsService } from './content-projects.service';

describe('ContentProjectsService', () => {
  let service: ContentProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
