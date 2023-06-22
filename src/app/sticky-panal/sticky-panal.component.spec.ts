import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyPanalComponent } from './sticky-panal.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CurrencyService } from 'src/services/currency.service';
import { of } from 'rxjs/internal/observable/of';

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
});
