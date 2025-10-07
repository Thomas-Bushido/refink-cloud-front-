import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:8080/api/refink/buyer/home';

  constructor(private http: HttpClient) {}

  getInfos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
