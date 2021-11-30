import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CooperativeService } from 'src/app/services/cooperative.service';
import { MaskUtil } from 'src/app/util/mask.util';
import { GenericValidator } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  providers: [CooperativeService],
})
export class StartComponent implements OnInit {

  form: FormGroup;
  maskUtil = MaskUtil;
  user:any = null;
  loading:boolean = false;
  accounts:any[] = [];

  constructor(private _formBuilder: FormBuilder, 
    private _toastr: ToastrService,
    private cooperativeService: CooperativeService) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this._formBuilder.group({
      cpf: ['', [Validators.required, GenericValidator.isValidCpf()]],
    });
  }

  submit()
  {
    this.loadData();
  }

  loadData()
  {
    this.loading = true;
    this.cooperativeService.getData()
    .subscribe((result: any) => {
      this.user = result;
      this.loading = false;
      this.filterCPF(result.data);
    },
    (err) => {
      this._toastr.error(err);
    });
}

filterCPF(data:any[]) {
  const cpf = this.form.get('cpf')?.value;
  this.accounts = data.filter(item => item.cpf == cpf);
  console.log(this.accounts)

  if(this.accounts.length == 0)
  {
    this._toastr.error('Nenhuma conta encontrada');
  }
}

  stepTwoSubmit() {
  }
}
function finalize(arg0: () => any): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

