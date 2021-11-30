import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberAdmissionRoutingModule } from './member-admission-routing.module';
import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { NavBarComponent } from 'src/app/theme/layout/admin/nav-bar/nav-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { NgStepperModule } from 'angular-ng-stepper';
import { DocumentsComponent } from './steps/documents/documents.component';
import { StartComponent } from './steps/start/start.component';
import { NgxMaskModule } from "ngx-mask";
import { RegistrationDataComponent } from './steps/registration-data/registration-data.component';
import { AdmissionComponent } from './steps/admission/admission.component';

@NgModule({
  declarations: [NewAdmissionComponent, NavBarComponent, AdmissionComponent, RegistrationDataComponent, StartComponent, DocumentsComponent],
  imports: [
    CommonModule,
    MemberAdmissionRoutingModule,
    BsDropdownModule,
    CdkStepperModule,
    NgStepperModule,
    ReactiveFormsModule,
    NgxMaskModule
  ]
})
export class MemberAdmissionModule { }
