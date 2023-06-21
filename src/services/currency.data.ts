import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Curruncy } from "./currency.model";
import { apiKey } from "./define";

@Injectable({
    providedIn: 'root'
  })
  export class CurrencyData {
    constructor(private http: HttpClient) { }


    getExchangeRates(): Observable<Curruncy> {
        const url = `http://data.fixer.io/api/latest?access_key=${apiKey}`;
        return this.http.get(url).pipe(
          map((res)=> {
            return res;
          })
        );
      }
  }