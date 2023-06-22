import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurruncySelectorComponent } from './curruncy-selector.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CurruncySelectorComponent', () => {
  let component: CurruncySelectorComponent;
  let fixture: ComponentFixture<CurruncySelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurruncySelectorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CurruncySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected value', () => {
    const event = { target: { value: 'testValue' } };
    spyOn(component.currItemEvent, 'emit');
    component.onItemSelected(event);
    expect(component.currItemEvent.emit).toHaveBeenCalled();
  });
});
