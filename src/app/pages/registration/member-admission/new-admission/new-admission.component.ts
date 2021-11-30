import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CdkStepper} from '@angular/cdk/stepper';
import { CooperativeService } from 'src/app/services/cooperative.service';

@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.scss'],
  providers: [{provide: CdkStepper}],
})
export class NewAdmissionComponent implements OnInit {
  breadcrumbList = [
    { description: "Cadastro", url: "/#" },
    { description: "Admissão do cooperado", url: "/#" },
    { description: "Nova Admissão de Cooperado", url: "/#" },
  ];

  public sidebarShow: boolean = false;

  
  constructor() { }

    ngOnInit() {
      }


      clickSideBar()
      {
        this.sidebarShow = !this.sidebarShow
      }
}