import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import {Consultant} from "../consultant.model";
import {Consultant} from '../consultant.model';
import {httpOptions} from '../../shared/env';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private http: HttpClient) { }

  getConsultants(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>('api/consultants');
  }

  deleteConsultant(id: number): Observable<Consultant> {
    return this.http.delete<Consultant>(`/api/consultants/${id}`);
  }

  updateConsultant(consultant: Consultant) {
    return this.http.post(`/api/consultants`, consultant, httpOptions);
  }
}
