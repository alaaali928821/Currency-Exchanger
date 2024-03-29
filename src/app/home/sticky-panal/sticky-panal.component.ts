import { Component } from '@angular/core';
import { CurrValue } from 'src/app/models/currency.model';
import { CurrencyService } from 'src/app/services/currency.service';
import { AllCurrncies } from 'src/app/services/data';



@Component({
  selector: 'app-sticky-panal',
  templateUrl: './sticky-panal.component.html',
  styleUrls: ['./sticky-panal.component.scss']
})
export class StickyPanalComponent {
  amount_value: number = 1;
  allCurrencies = AllCurrncies;
  selectedvalFrom: string = 'USD';
  selectedvalTo: string = "EUR";
  result: number = 0;

  constructor(public currencyService: CurrencyService) { }

  convert(): void {
    this.currencyService.amout = this.amount_value;
    this.converGrid();
    this.currencyService.convertCurrency(this.selectedvalTo, this.selectedvalFrom, this.amount_value).subscribe((data) => {
      this.result = data
    })
  }

  converGrid(): void {
    this.currencyService.getMostPopularCurrencies(this.currencyService.amout).subscribe((items: CurrValue[]) => {
      this.currencyService.gridData = items
    });
  }
  currncyItemFrom(curruncyFrom: any): void {
    this.selectedvalFrom = curruncyFrom;
  }

  currncyItemTo(curruncyTo: any): void{
    this.selectedvalTo = curruncyTo;
  }

  swap(): void {
    let fromCurr;
    fromCurr = this.selectedvalFrom 
    this.selectedvalFrom  = this.selectedvalTo;
    this.selectedvalTo = fromCurr;
    this.convert()
  }
}
