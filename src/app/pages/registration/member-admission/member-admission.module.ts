import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberAdmissionRoutingModule } from './member-admission-routing.module';
import { NewAdmissionComponent } from './new-admission/new-admission.component';

@NgModule({
  declarations: [NewAdmissionComponent],
  imports: [
    CommonModule,
    MemberAdmissionRoutingModule,
  ]
})
export class MemberAdmissionModule { }
