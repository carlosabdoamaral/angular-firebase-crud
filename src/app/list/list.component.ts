import { Component } from '@angular/core';
import * as moment from 'moment';
import { AccountModel } from '../utils/models';
import { accountListMock } from '../utils/mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  accounts: AccountModel[] = accountListMock

  getFormattedBirthdate(d: Date): string {
    return moment(d).utc(false).format("DD/MM/YYYY")
  }
}
