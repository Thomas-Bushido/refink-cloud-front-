import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../../../models/loginResponseDto';
import { getApiUrl } from '../../../runtime-config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = getApiUrl();

  constructor(private http: HttpClient) {}

  login(data: { emailAddress: string, password: string }): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(`${this.apiUrl}/login`, data);
  }

}
