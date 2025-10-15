import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../../../models/loginResponseDto';
import { getApiUrl } from '../../../runtime-config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // use a getter to resolve the API URL at call time (avoids accessing window during SSR/module init)
  private get apiUrl(): string {
    return getApiUrl();
  }

  constructor(private http: HttpClient) {}

  login(data: { emailAddress: string, password: string }): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(`${this.apiUrl}/login`, data);
  }

}
