import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HandleStartupComponent } from './startup/view/handle-startup/handle-startup.component';
import { LoopStartupComponent } from './startup/components/loop-startup/loop-startup.component';
import { RowStartupComponent } from './startup/components/row-startup/row-startup.component';
import { HandleConsultantComponent } from './consultant/view/handle-consultant/handle-consultant.component';
import { LoopConsultantComponent } from './consultant/components/loop-consultant/loop-consultant.component';
import { RowConsultantComponent } from './consultant/components/row-consultant/row-consultant.component';

import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NumberCofounderPipe } from './startup/pipes/number-cofounder.pipe';
import { AddressPipe } from './startup/pipes/address.pipe';
import { FormStartupComponent } from './startup/components/form-startup/form-startup.component';
import { FormConsultantComponent } from './consultant/components/form-consultant/form-consultant.component';
import { HomeComponent } from './home/view/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './auth/views/login/login.component';
import { RegisterComponent } from './auth/views/register/register.component';

import {
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatOptionModule, MatSelectModule, MatInputModule, MatDialogModule, MatButtonToggleModule, MatSlideToggleModule,
  MatSnackBarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateStartupComponent } from './startup/components/create-startup/create-startup.component';
import { UpdateStartupComponent } from './startup/components/update-startup/update-startup.component';
import { UpdateConsultantComponent } from './consultant/components/update-consultant/update-consultant.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { StartupCardComponent } from './home/components/startup-card/startup-card.component';
import { ConsultantCardComponent } from './home/components/consultant-card/consultant-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HandleStartupComponent,
    LoopStartupComponent,
    RowStartupComponent,
    HandleConsultantComponent,
    LoopConsultantComponent,
    RowConsultantComponent,
    NumberCofounderPipe,
    AddressPipe,
    FormStartupComponent,
    FormConsultantComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    CreateStartupComponent,
    UpdateStartupComponent,
    UpdateConsultantComponent,
    SpinnerComponent,
    StartupCardComponent,
    ConsultantCardComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // ),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [
    AddressPipe,
    NumberCofounderPipe
  ],
  entryComponents: [
    UpdateStartupComponent,
    UpdateConsultantComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
