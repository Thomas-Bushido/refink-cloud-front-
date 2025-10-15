import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getApiUrl } from '../../../runtime-config';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = getApiUrl();

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
