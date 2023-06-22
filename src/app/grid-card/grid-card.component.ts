import { Component } from '@angular/core';
import { CurrValue } from 'src/services/currency.model';
import { CurrencyService } from 'src/services/currency.service';
import { GridDefaulData } from 'src/services/define';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss']
})
export class GridCardComponent {

  constructor(public currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.gridData = GridDefaulData;
  }
}
