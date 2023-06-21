import { Injectable } from '@angular/core';
import { CurrValue, Curruncy, Rates } from './currency.model';
import { CurrencyData } from './currency.data';
import { map } from 'rxjs/internal/operators/map';
import { MostPopularCurrncies } from './define';

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
}
