import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFlightComponent } from './select-flight.component';

describe('SelectFlightComponent', () => {
  let component: SelectFlightComponent;
  let fixture: ComponentFixture<SelectFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
