import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {Consultant} from '../consultant.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private http: HttpClient) { }

  getConsultants(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>('api/consultants');
  }
}
