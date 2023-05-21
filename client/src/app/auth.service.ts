import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  login(data: any) {
    return this.http.post(`${this.BASE_URL}/user/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.BASE_URL}/user/register`, data);
  }

  getHotel(dest: string) {
    return this.http.post(`${this.BASE_URL}/hotel`, dest);
  }
}
