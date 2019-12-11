import { async, TestBed } from '@angular/core/testing';
import { MapboxModule } from './mapbox.module';

describe('MapboxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MapboxModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MapboxModule).toBeDefined();
  });
});
