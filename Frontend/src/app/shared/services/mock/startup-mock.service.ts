import { Injectable } from '@angular/core';
import {ConsultantMockService} from './consultant-mock.service';
import {Startup} from '../../../startup/startup.model';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class StartupMockService {

  constructor(private consultantMockService: ConsultantMockService) { }

  getStartupsMock(): Startup[] {
    const stratUps: Startup[] = [];

    for (let i = 0; i < 30; i++) {
      if (i % 2 === 0) {
        const startupWithAdress: Startup = new Startup(i, faker.company.companyName(), faker.commerce.department(),
          faker.finance.accountName(), 3, faker.company.catchPhraseDescriptor(),
          faker.address.streetAddress() + ', ' + faker.address.city(), this.consultantMockService.getConsultansMock()[i]);
        stratUps.push(startupWithAdress);
      } else {
        const startupWithoutAddress: Startup = new Startup(i, faker.company.companyName(), faker.commerce.department(),
        faker.finance.accountName(), 1, faker.company.catchPhraseDescriptor(), null,
        this.consultantMockService.getConsultansMock()[i]);
        stratUps.push(startupWithoutAddress);
      }
    }
    return stratUps;

  }
}
