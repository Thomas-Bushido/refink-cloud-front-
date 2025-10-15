import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../../../models/loginResponseDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private apiUrl = 'https://app-8c64c9fb-207f-4c42-af30-132121a3c14b.cleverapps.io/api/refink/buyer';

  constructor(private http: HttpClient) {}
  login(data: { emailAddress: string, password: string }): Observable<LoginResponseDto> {

    
    return this.http.post<LoginResponseDto>(`${this.apiUrl}/login`, data);
  }

}
