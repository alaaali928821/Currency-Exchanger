import { Injectable } from '@angular/core';
import { CurrValue, Curruncy } from './currency.model';
import { CurrencyData } from './currency.data';
import { map } from 'rxjs/internal/operators/map';
import { MostPopularCurrncies } from './define';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  public dataItemsCurrency: Curruncy = {};
  amout: number = 1;
  gridData: CurrValue[] = [];

  constructor(public currencyData: CurrencyData) { }


  getMostPopularCurrencies(amount: number = 1): Observable<CurrValue[]> {
    return this.currencyData.getExchangeRates().pipe(
      map(res => {
        const rates = JSON.stringify(res.rates);
        const mostPopularData: CurrValue[] = [];
        MostPopularCurrncies.forEach(el => {
          mostPopularData.push({ currencyName: el, valueCurr: rates.indexOf(el) * amount });
        });
        return mostPopularData;
      })
    );
  }

  convertCurrency(To: string = 'USD', From: string = 'EUR', amount: number = 1): Observable<number> {
    return this.currencyData.getConversionCurruncy(From, To, amount).pipe(
      map(data => data['conversion_result'] || 0)
    );
  }
}
