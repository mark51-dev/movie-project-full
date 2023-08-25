import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCustomSelectComponent } from './filter-custom-select.component';

describe('FilterCustomSelectComponent', () => {
  let component: FilterCustomSelectComponent;
  let fixture: ComponentFixture<FilterCustomSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterCustomSelectComponent]
    });
    fixture = TestBed.createComponent(FilterCustomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
