import { Consultant } from './../../../consultant/consultant.model';
import { ConsultantService } from './../../../consultant/services/consultant.service';
import { Component, OnInit } from '@angular/core';
import { StartupService } from 'src/app/startup/services/startup.service';
import { Startup } from 'src/app/startup/startup.model';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardsToDisplay: Number = 3;
  startUps: Startup[];
  consultants: Consultant[];

  constructor(private startUpService: StartupService,
    private consultantService: ConsultantService,
    private userService: UserService) { }

  ngOnInit() {
    this.getStartUps();
    this.getConsultant();
  }

  getStartUps() {
    this.startUpService.getStartUps().subscribe(startups => {
      this.startUps = startups;
    });
  }

  getConsultant() {
    this.consultantService.getConsultants().subscribe(consultants => {
      this.consultants = consultants;
    });
  }
}
