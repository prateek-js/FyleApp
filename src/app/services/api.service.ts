import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://vast-shore-74260.herokuapp.com/banks';

  constructor(private http: HttpClient) { }

  searchData(cityName: string): Observable<any> {
    const url = this.url + '?city='+cityName;
    console.log(url);
    return this.http.get(url).pipe(map((res) => res));
  }
}
