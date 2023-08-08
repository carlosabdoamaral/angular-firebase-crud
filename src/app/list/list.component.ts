import { Component } from '@angular/core';
import * as moment from 'moment';
import { AccountModel } from '../utils/models';
import { accountListMock } from '../utils/mock';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(private _toastService: ToastService) { }

  accounts: AccountModel[] = accountListMock

  getFormattedBirthdate(d: Date): string {
    return moment(d).utc(false).format("DD/MM/YYYY")
  }

  deleteById(id: number) {
    this.accounts = this.accounts.filter((_, index) => index !== id)
    this._toastService.success("Conta deletada com sucesso!")
  }
}
