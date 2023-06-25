import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { GridDefaulData } from '../../services/data';


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
