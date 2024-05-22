import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/api/auth'

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user)
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, {email, password})
  }

  getToken(): string {
    return localStorage.getItem('token') || ''
  }

  setToken(token: string): void {
    localStorage.setItem('token', token)
  }

  logout(): void {
    localStorage.removeItem('token')
  }
}
