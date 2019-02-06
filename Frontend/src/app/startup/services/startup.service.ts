import { Injectable } from '@angular/core';
import {StartupMockService} from "../../shared/services/mock/startup-mock.service";
import {Startup} from "../startup.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient) { }

  getStartUps(): Observable<Startup[]> {
    return this.http.get<Startup[]>('api/startups');
  }
}
