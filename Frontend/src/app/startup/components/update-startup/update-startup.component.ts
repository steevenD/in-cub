import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Startup} from "../../startup.model";
import {StartupService} from "../../services/startup.service";
import {Consultant} from "../../../consultant/consultant.model";
import {ConsultantService} from "../../../consultant/services/consultant.service";

@Component({
  selector: 'app-update-startup',
  templateUrl: './update-startup.component.html',
  styleUrls: ['./update-startup.component.css']
})
export class UpdateStartupComponent implements OnInit {


  fGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateStartupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private startupService: StartupService,
    private consultantService: ConsultantService) {}


  ngOnInit() {
    this.generateFormGroup();
    this.initFormGroup();
  }

  generateFormGroup() {
    this.fGroup = this.startupService.generateForm();
  }

  initFormGroup() {
    console.log(this.data);
    this.fGroup.get('name').setValue(this.data.startUp.name);
    this.fGroup.get('businessLine').setValue(this.data.startUp.businessLine);
    this.fGroup.get('legalRepresentativeName').setValue(this.data.startUp.legalRepresentativeName);
    this.fGroup.get('cofounderNumber').setValue(this.data.startUp.cofounderNumber);
    this.fGroup.get('description').setValue(this.data.startUp.description);
    this.fGroup.get('address').setValue(this.data.startUp.address);
    this.fGroup.get('consultant').setValue(this.data.startUp.consultant);
  }



  handleClickUpdateStartup(fGroup: FormGroup) {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      const startUpToUpdate: Startup = this.startupService.transformFormToStartUp(fGroup, this.data.startUp.id);
      this.startupService.updateStartUp(startUpToUpdate).subscribe(() => this.startupService.setStartupChange(true));
      });
   }
}
