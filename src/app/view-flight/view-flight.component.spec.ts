import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlightComponent } from './view-flight.component';

describe('ViewFlightComponent', () => {
  let component: ViewFlightComponent;
  let fixture: ComponentFixture<ViewFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
