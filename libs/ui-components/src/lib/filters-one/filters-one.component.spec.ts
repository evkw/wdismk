import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersOneComponent } from './filters-one.component';

describe('FiltersOneComponent', () => {
  let component: FiltersOneComponent;
  let fixture: ComponentFixture<FiltersOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
