import { Consultant } from './../../consultant/consultant.model';
import { Injectable } from '@angular/core';
import { Startup } from 'src/app/startup/startup.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {ConsultantMockService} from './mock/consultant-mock.service';
import {StartupMockService} from './mock/startup-mock.service';
import { User } from 'src/app/auth/user.model';
import { UserMockService } from './mock/user-mock.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor(private consultantServiceMock: ConsultantMockService,
    private startupServiceMock: StartupMockService,
    private userMockService: UserMockService) { }

  createDb() {
    const consultants = this.consultantServiceMock.getConsultansMock();
    const startups = this.startupServiceMock.getStartupsMock();
    const users = this.userMockService.getUsersMock();
    return {consultants, startups, users};
  }

  genId<T extends Consultant | Startup | User>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 11;
  }
}
