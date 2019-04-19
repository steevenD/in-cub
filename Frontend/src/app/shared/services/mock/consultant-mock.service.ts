import { Injectable } from '@angular/core';
import * as faker from 'faker';
import {Consultant} from '../../../consultant/consultant.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultantMockService {

  constructor() { }

  getConsultansMock(): Consultant [] {
    const consultants: Consultant[] = [];
    for (let i = 0; i < 30; i++) {
      const consultant: Consultant = new Consultant(i, faker.name.firstName(), faker.name.lastName(), faker.name.jobDescriptor());
      consultants.push(consultant);
    }
    return consultants;
  }
}
