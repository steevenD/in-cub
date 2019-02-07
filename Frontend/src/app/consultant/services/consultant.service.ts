import { Injectable } from '@angular/core';
import {Consultant} from "../consultant.model";
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor() { }

  getConsultantsMock(): Consultant[] {
    let toReturnConsultants: Consultant[];

    for (let i = 0; i < 20; i++){
      const s: Consultant = new Consultant(i, faker.name.findName(), faker.name.lastName(), faker.name.jobDescriptor());
      toReturnConsultants.push(s);
    }
    return toReturnConsultants;
  }
}
