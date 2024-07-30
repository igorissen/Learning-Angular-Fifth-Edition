import { TestBed } from '@angular/core/testing';

import { DepsService } from './deps.service';
import {provideHttpClient} from "@angular/common/http";
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";

describe('DepsService', () => {
  let httpTestingController: HttpTestingController;
  let service: DepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(DepsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('creates service', () => {
    expect(service).toBeTruthy();
  });

  it('retrieves items through http client', () => {
    service.getItems().subscribe();
    const req = httpTestingController.expectOne('https://google.be');
    expect(req.request.method).toBe('GET');
  });

  it('adds an item', () => {
    service.addItem('Camera').subscribe();
    const req = httpTestingController.expectOne('https://google.be');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ name: 'Camera' })
  });
});
