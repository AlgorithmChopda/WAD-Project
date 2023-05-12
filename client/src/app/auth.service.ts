import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}
  login(data: any) {
    console.log('point 1');
    return this.http.post(`${this.BASE_URL}/user/login`, data);
  }
}
