import { Component } from '@angular/core';
import { CurrValue } from 'src/services/currency.model';
import { CurrencyService } from 'src/services/currency.service';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss']
})
export class GridCardComponent {
  data: Array<CurrValue> | undefined;

  constructor( public currencyService: CurrencyService){}

  ngOnInit() {
   this.data =  this.currencyService.getMostPopularCurrencies();
  }
}
