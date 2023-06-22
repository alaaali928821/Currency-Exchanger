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

  constructor(private currencyData: CurrencyData) { }


  getMostPopularCurrencies(amount: number = 1): Array<CurrValue> {
    let mostPopulaDat: Array<CurrValue> = []
    this.currencyData.getExchangeRates().subscribe(res => {
      let rates = JSON.stringify(res.rates);
      MostPopularCurrncies.forEach(el => {
        mostPopulaDat.push({ currencyName: el, value: rates.indexOf(el) * amount })
      })
    })
    return mostPopulaDat;
  }

  convertCurrency(To: string = 'USD', From: string = 'EUR', amount: number = 1): Observable<number> {
    return this.currencyData.getConversionCurruncy(From, To, amount).pipe(
      map(data => data['conversion_result'] || 0)
    );
  }
}
