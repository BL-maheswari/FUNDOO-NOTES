import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remainders } from './remainders';

describe('Remainders', () => {
  let component: Remainders;
  let fixture: ComponentFixture<Remainders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remainders],
    }).compileComponents();

    fixture = TestBed.createComponent(Remainders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
