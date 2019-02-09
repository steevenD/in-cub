import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import {Consultant} from '../consultant.model';
import {httpOptions} from '../../shared/env';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  private consultantsChange = new BehaviorSubject(false);
  public consuultantsChange$ = this.consultantsChange.asObservable();

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  setConsultantChange(change: boolean) {
    this.consultantsChange.next(change);
  }

  /**
   * to generate form
   */
  generateForm(): FormGroup {
    return this.fb.group({
      'firstname': ['', [Validators.required, Validators.maxLength(25)]],
      'lastname': ['', [Validators.required, Validators.maxLength(25)]],
      'description': ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  transformFormToConsultant(form: FormGroup, id = null): Consultant {
    const consultant: Consultant = {
      id: id,
      firstname: form.get('firstname').value,
      lastname: form.get('lastname').value,
      description: form.get('description').value
    };
    return consultant;
  }

  getConsultant(id: number): Observable<Consultant> {
    return this.http.get<Consultant>(`api/consultants/${id}`);
  }


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
