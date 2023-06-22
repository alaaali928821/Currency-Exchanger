import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import { CurrencyData } from './currency.data';
import { of } from 'rxjs/internal/observable/of';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CurrencyData,
          useValue: {
            getExchangeRates() {
              return of({})
            },
            getConversionCurruncy(){
              return of({})
            }
          }
        },
      ]
    });
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
