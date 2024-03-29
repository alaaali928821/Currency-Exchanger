import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyPanalComponent } from './sticky-panal.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CurrencyService } from 'src/services/currency.service';
import { of } from 'rxjs';
import { GridDefaulData } from 'src/services/define';

describe('StickyPanalComponent', () => {
  let component: StickyPanalComponent;
  let fixture: ComponentFixture<StickyPanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyPanalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: CurrencyService,
          useValue: {
            getMostPopularCurrencies() {
              return of({})
            },
            convertCurrency(){
              return of({})
            }
          }
        },
      ]
    });
    fixture = TestBed.createComponent(StickyPanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert value', () => {
    spyOn(component.currencyService, 'convertCurrency').and.returnValue(of(99));
    component.convert();
    expect(component.result).toBeTruthy();
  });

  it('should converGrid', () => {
    spyOn(component.currencyService, 'getMostPopularCurrencies').and.returnValue(of(GridDefaulData));
    component.converGrid();
    expect(component.currencyService.gridData).toBeTruthy();
  });

  it('should currncyItemFrom', () => {
    component.currncyItemFrom('ERU');
    expect(component.selectedvalFrom).toEqual('ERU');
  });

  it('should currncyItemTo', () => {
    component.currncyItemTo('USD');
    expect(component.selectedvalTo).toEqual('USD');
  });

});
