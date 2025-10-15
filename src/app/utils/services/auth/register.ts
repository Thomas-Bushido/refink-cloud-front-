import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'https://app-8c64c9fb-207f-4c42-af30-132121a3c14b.cleverapps.io/api/refink/buyer';

    constructor(private http: HttpClient) {}

    register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
