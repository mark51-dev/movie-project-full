import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesContainerComponent } from './series-container.component';

describe('SeriesContainerComponent', () => {
  let component: SeriesContainerComponent;
  let fixture: ComponentFixture<SeriesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesContainerComponent]
    });
    fixture = TestBed.createComponent(SeriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
