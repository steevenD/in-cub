import { Consultant } from './../../consultant.model';
import { ConsultantService } from './../../services/consultant.service';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import {SpinnerService} from "../../../shared/services/spinner.service";

@Component({
  selector: 'app-update-consultant',
  templateUrl: './update-consultant.component.html',
  styleUrls: ['./update-consultant.component.css']
})
export class UpdateConsultantComponent implements OnInit {

  fGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateConsultantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private consultantService: ConsultantService,
    private snackBar: MatSnackBar,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.generateFormGroup();
    this.initFormGroup();
  }

  generateFormGroup() {
    this.fGroup = this.consultantService.generateForm();
  }

  initFormGroup() {
    this.fGroup.get('firstname').setValue(this.data.consultant.firstname);
    this.fGroup.get('lastname').setValue(this.data.consultant.lastname);
    this.fGroup.get('description').setValue(this.data.consultant.description);
  }

  handleClickUpdateConsultant(fGroup: FormGroup) {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      const consultantToUpdate: Consultant = this.consultantService.transformFormToConsultant(fGroup, this.data.consultant._id);
      this.consultantService.updateConsultant(consultantToUpdate).subscribe(() => {
        this.spinnerService.show();
        this.consultantService.setConsultantChange(true);
      },
        (err) => console.error(err),
        () => {
        this.spinnerService.hide();
          this.snackBar.open('The consultant has been updated.', 'Close', {
            duration: 3000
          });
        });
      });
   }
}
