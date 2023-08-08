import { Component } from '@angular/core';
import { AccountModel } from '../utils/models';
import axios from 'axios';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  countryOptions: string[] = [
    'BR', 'USA', 'ARG', 'FR', 'OTHER'
  ]

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

    // firebase call
  }
}
