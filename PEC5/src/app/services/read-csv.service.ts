import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadCSVService {

  constructor(private papa: Papa, private http: HttpClient) { }

  getCsvData(url: string): Observable<any[]> {
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(csvText => {
        const parsed = this.papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true
        });
        return parsed.data;
      })
    );
  }
}
