import { Component } from '@angular/core';
import { CurrencyService } from 'src/services/currency.service';
import { AllCurrncies } from 'src/services/define';

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

  changeAmountValue() {
    this.amount_value
  }

 
  convert(): void {
    this.currencyService.convertCurrency(this.selectedvalTo, this.selectedvalFrom, this.amount_value).subscribe((data) => {
      this.result = data
    })
  }

  currncyItemFrom(curruncyFrom: any){
    this.selectedvalFrom = curruncyFrom;
  }

  currncyItemTo(curruncyTo: any){
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
