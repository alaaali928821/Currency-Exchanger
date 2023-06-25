import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Curruncy } from "../models/currency.model";
import { apiKey, conversionCurruncy, responseAllRates } from "./data";

@Injectable({
  providedIn: 'root'
})
export class CurrencyData {
  constructor(private http: HttpClient) { }


  getExchangeRates(): Observable<Curruncy> {
    const url = `http://data.fixer.io/api/latest?access_key=${apiKey}`;
    return this.http.get(url).pipe(
      map((res) => {
        // due to Error Your monthly usage limit has been reached. Please upgrade your Subscription Plan.
        res = responseAllRates;
        return res;
      })
    );
  }


  getConversionCurruncy(from: string, to: string, amount: number): Observable<any> {
    const url = `http://data.fixer.io/api/latest?access_key=${apiKey}`//`https://v6.exchangerate-api.com/v6/e742d3e87612b22e5fe91401/pair/${from}/${to}/${amount}`
    return this.http.get(url).pipe(
      map((res) => {
        res = conversionCurruncy;
        return res
      }))
  }
}