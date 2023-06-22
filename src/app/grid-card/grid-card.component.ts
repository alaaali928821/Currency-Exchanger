import { Component } from '@angular/core';
import { CurrValue } from 'src/services/currency.model';
import { CurrencyService } from 'src/services/currency.service';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss']
})
export class GridCardComponent {

  constructor(public currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.gridData =  [
        {
            "currencyName": "USD",
            "valueCurr": 2409
        },
        {
            "currencyName": "CNY",
            "valueCurr": 510
        },
        {
            "currencyName": "NZD",
            "valueCurr": 1770
        },
        {
            "currencyName": "AUD",
            "valueCurr": 115
        },
        {
            "currencyName": "CAD",
            "valueCurr": 431
        },
        {
            "currencyName": "CHF",
            "valueCurr": 464
        },
        {
            "currencyName": "GBP",
            "valueCurr": 772
        },
        {
            "currencyName": "JPY",
            "valueCurr": 1159
        },
        {
            "currencyName": "EUR",
            "valueCurr": 734
        }
    ]
  }
}
