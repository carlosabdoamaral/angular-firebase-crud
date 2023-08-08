import { Component } from '@angular/core';
import { AccountModel } from '../utils/models';
import { accountListMock } from '../utils/mock';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  constructor(private _toastService: ToastService) { }

  countryOptions: string[] = [
    'BR', 'USA', 'ARG', 'FR', 'OTHER'
  ]

  accountInitialState: AccountModel = {
    name: "",
    email: "",
    birthdate: new Date(),
    country: this.countryOptions[0],
  }

  account: AccountModel = {
    name: "",
    email: "",
    birthdate: new Date(),
    country: this.countryOptions[0],
  }

  handleChangeInput(e: any, field: 'name' | 'email' | 'birthdate' | 'country') {
    e.preventDefault()
    this.account[field] = e.target.value
  }

  async submit(e: any) {
    e.preventDefault()
    accountListMock.push(this.account)
    this._toastService.success('Conta criada com sucesso!')
    this.account = this.accountInitialState
  }
}
