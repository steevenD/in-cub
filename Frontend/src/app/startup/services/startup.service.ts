import { Injectable } from '@angular/core';
import {Startup} from '../startup.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient) { }

  getStartUps(): Observable<Startup[]> {
    return this.http.get<Startup[]>('api/startups');
  }
}
