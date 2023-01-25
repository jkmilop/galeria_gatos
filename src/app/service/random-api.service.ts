import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomApiService {
  constructor(private http: HttpClient) {}

  fetchImage(): Observable<any> {
    // Id name en proxy.conf.json
    let urlBase = '/api/v2/random';

    return this.http.get(urlBase, {
      headers: new HttpHeaders({ 'Content-Type': 'application/JSON' }),
    });
  }
}
