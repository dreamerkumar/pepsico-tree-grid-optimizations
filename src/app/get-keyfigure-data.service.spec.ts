import { TestBed } from '@angular/core/testing';

import { GetKeyfigureDataService } from './get-keyfigure-data.service';

describe('GetKeyfigureDataService', () => {
  let service: GetKeyfigureDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetKeyfigureDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
