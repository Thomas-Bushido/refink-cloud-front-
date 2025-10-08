import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = environment.apiUrl + '/home';

  constructor(private http: HttpClient) {}

  getInfos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
