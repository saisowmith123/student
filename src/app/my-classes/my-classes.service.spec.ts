import { TestBed } from '@angular/core/testing';

import { MyClassesService } from './my-classes.service';

describe('MyClassesService', () => {
  let service: MyClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
