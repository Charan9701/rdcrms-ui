import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  localApi = "http://localhost:5000/api/login";

  constructor(private http: HttpClient) { }

  getLogin(aadhaarNumber: any, password: any): Observable<any> {
    const body = {
      aadhaarNumber: aadhaarNumber,
      password: password,
    };
    return this.http.post<any>(this.localApi, body);
  }
}
