import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';



describe('HttpClient', () => {
  let service: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
