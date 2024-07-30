import { TestBed } from '@angular/core/testing';

import { AsyncService } from './async.service';

describe('AsyncService', () => {
  let service: AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncService);
  });

  it('creates service', () => {
    expect(service).toBeTruthy();
  });

  it('sets items', () => {
    const result = service.setItems('Camera');
    expect(result.length).toBe(4);
  });

  it('retrieves items', (done) => {
    service.getItems().subscribe(items => {
      expect(items.length).toBe(3);
      done();
    })
  });
});
