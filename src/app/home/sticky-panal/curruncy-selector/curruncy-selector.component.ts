import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AllCurrncies } from 'src/app/services/data';

@Component({
  selector: 'app-curruncy-selector',
  templateUrl: './curruncy-selector.component.html',
  styleUrls: ['./curruncy-selector.component.scss']
})
export class CurruncySelectorComponent {
  allCurrencies = AllCurrncies;
  @Input() selectedval: string | undefined;
  @Output() currItemEvent = new EventEmitter<number>();

  

  onItemSelected(event: any) {
    this.currItemEvent.emit(event.target.value);
  }

}
