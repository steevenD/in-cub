import { Injectable } from '@angular/core';
import {ConsultantMockService} from '../../shared/services/mock/consultant-mock.service';
import {Consultant} from '../consultant.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private consultantMockService: ConsultantMockService) { }

  getConsultants(): Consultant[] {
    return this.consultantMockService.getConsultansMock();
  }
}
