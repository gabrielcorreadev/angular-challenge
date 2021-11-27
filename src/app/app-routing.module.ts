import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "member-admission",
        pathMatch: "full",
      },
      {
        path: "member-admission",
        loadChildren: () =>
          import("./pages/registration/member-admission/member-admission.module").then(
            (m) => m.MemberAdmissionModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
