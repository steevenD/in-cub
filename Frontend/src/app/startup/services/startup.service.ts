import { Injectable } from '@angular/core';
import {Startup} from "../startup.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {httpOptions} from "../../shared/env";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  /**
   * to generate form
   */
  generateForm(): FormGroup {
    return this.fb.group({
      'name': ['', [Validators.required, Validators.maxLength(20)]],
      'businessLine': ['', [Validators.required, Validators.maxLength(10)]],
      'legalRepresentativeName': ['', [Validators.required, Validators.maxLength(15)]],
      'cofounderNumber': ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
      'description': ['', [Validators.required, Validators.maxLength(250)]],
      'address': ['', [Validators.maxLength(25)]],
      'consultant': ['', [Validators.required]],
    })
  }


  getStartUps(): Observable<Startup[]> {
    // return this.http.get<Startup[]>(urlAPI + 'startups');
    return this.http.get<Startup[]>('api/startups');
  }

  deleteStartUp(id: number) {
    // return this.http.delete(urlAPI + `startups/${id}`);
    return this.http.delete(`api/startups/${id}`);
  }

  updateStartUp(startup: Startup) {
    // return this.http.post(urlAPI + `startups`, startup, httpOptions);
    return this.http.post('api/startups', startup, httpOptions);
  }

}
