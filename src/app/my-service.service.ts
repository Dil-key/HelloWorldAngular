import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }

  private rivateData = [];
  private apiUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }
}
