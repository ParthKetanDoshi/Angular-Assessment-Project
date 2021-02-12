import { TestBed } from '@angular/core/testing';

import { PhotosalbumfetchService } from './photosalbumfetch.service';

describe('PhotosalbumfetchService', () => {
  let service: PhotosalbumfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosalbumfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
