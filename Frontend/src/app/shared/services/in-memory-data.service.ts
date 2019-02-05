import { Consultant } from './../../consultant/consultant.model';
import { Injectable } from '@angular/core';

import { Startup } from 'src/app/startup/startup.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return { };
  }

  genId<T extends Consultant | Startup>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 11;
  }
}
