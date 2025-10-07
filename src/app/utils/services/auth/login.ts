import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../../../models/loginResponseDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private apiUrl = 'http://localhost:8080/api/refink/buyer';

  constructor(private http: HttpClient) {}
  login(data: { emailAddress: string, password: string }): Observable<LoginResponseDto> {

    
    return this.http.post<LoginResponseDto>(`${this.apiUrl}/login`, data);
  }

}
