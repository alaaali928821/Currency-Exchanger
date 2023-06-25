import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCardComponent } from './grid-card.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { CurrencyService } from 'src/services/currency.service';

describe('GridCardComponent', () => {
  let component: GridCardComponent;
  let fixture: ComponentFixture<GridCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: CurrencyService,
          useValue: {
            getMostPopularCurrencies() {
              return of({})
            },
            convertCurrency(){
              return of({})
            }
          }
        },
      ]
    });
    fixture = TestBed.createComponent(GridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
