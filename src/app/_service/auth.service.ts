import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public baseUrl: string;

  constructor(private http: HttpClient, private _router: Router) {
    this.baseUrl = 'http://103.90.241.49:9092'; // VSU
  }

  /**
   * Method for handle HTTP Request.
   * Method to Handle all kind of HTTP Request.
   * @param method: Parameter to get HTTP Request Method.
   * @param type: Parameter to get URL of HTTP Request.
   * @param data: Parameter to get body for Post method which is optional.
   */
  public request = (
    method: 'post' | 'get' | 'put' | 'delete' | 'patch' | 'file',
    type: String,
    data?: any
  ): Observable<any> => {
    let base;
    if (method === 'post') {
      base = this.http.post(`${this.baseUrl}/${type}`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
    } else if (method === 'get') {
      localStorage;
      base = this.http.get(`${this.baseUrl}/${type}`);
    }
    return base;
  };
}
