import { Component } from '@angular/core';
import * as moment from 'moment';

enum CountryOptionEnum {
  BR, USA, ARG, OTHER
}

interface AccountModel {
  name: string
  email: string
  birthdate: Date
  country: string,
}

const accountListMock: AccountModel[] = [
  {
    name: "Carlos Amaral",
    email: "carlosabdoamaral@gmail.com",
    birthdate: new Date(),
    country: "BR"
  },
  {
    name: "Jeferson Amaral",
    email: "jca@gmail.com",
    birthdate: new Date(),
    country: "USA"
  },
]

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
