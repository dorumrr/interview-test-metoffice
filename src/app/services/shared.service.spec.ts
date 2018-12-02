import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler]
  }));

  it(`should be created`, () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });

  it(`should hit the API (JSON file in our case)`, async () => {
    const shared: SharedService = TestBed.get(SharedService);
    expect(shared.dataApi('Tmax', 'England')).toBeDefined();
  });

});
