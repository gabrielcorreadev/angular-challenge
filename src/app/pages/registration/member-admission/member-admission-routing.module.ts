import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAdmissionComponent } from './new-admission/new-admission.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "new-admission",
    pathMatch: "full",
  },
  {
    path: 'new-admission',
    component: NewAdmissionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberAdmissionRoutingModule { }
