import { Component, Input, OnInit } from '@angular/core';
import { Consultant } from "../../consultant.model";
import { ConsultantService} from "../../services/consultant.service";


@Component({
  selector: 'app-row-consultant',
  templateUrl: './row-consultant.component.html',
  styleUrls: ['./row-consultant.component.css']
})
export class RowConsultantComponent implements OnInit {

  @Input()
  consultant: Consultant;

  @Input()
  row: string;

  displayRow;

  constructor(private consultantService: ConsultantService) { }

  ngOnInit() {
    this.getDisplayRow(this.row);
  }

  getDisplayRow(row: string) {
    switch (row) {
      case 'firstname': this.displayRow = this.consultant.firstname;break;
      case 'lastname': this.displayRow = this.consultant.lastname;break;
      case 'description': this.displayRow = this.consultant.description;break;
    }
  }

  /**
   * to delete a consultant
   * @param idConsultant
   */
  handleClickDeleteConsultant(idConsultant: number) {
    console.log(idConsultant);
    this.consultantService.deleteConsultant(idConsultant).subscribe();
    this.consultantService.getConsultants().subscribe(consultants => {
      this.consultantService.consultants.next(consultants);
    });
  }

  /**
   * to update a consultant
   * @param idConsultant
   */
  handleClickUpdateConsultant(idConsultant: number) {
  }

}
