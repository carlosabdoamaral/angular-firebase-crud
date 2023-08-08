import { Component } from '@angular/core';

interface AccountModel {
  name: string
  email: string
  birthdate: Date
  
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

}
