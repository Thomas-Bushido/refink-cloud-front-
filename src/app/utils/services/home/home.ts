import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://app-8c64c9fb-207f-4c42-af30-132121a3c14b.cleverapps.io/api/refink/buyer/home';

  constructor(private http: HttpClient) {}

  getInfos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
