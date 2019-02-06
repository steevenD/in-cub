import { Injectable } from '@angular/core';
import {Startup} from "../startup.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {httpOptions} from "../../shared/env";

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient) { }

  getStartUps(): Observable<Startup[]> {
    return this.http.get<Startup[]>('api/startups');
  }

  deleteStartUp(id: number) {
    return this.http.delete(`api/startups/${id}`)
  }

  updateStartUp(startup: Startup) {
    return this.http.post(`/api/startups`, startup, httpOptions);
  }

}
