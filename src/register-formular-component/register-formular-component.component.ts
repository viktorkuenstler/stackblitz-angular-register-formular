import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-formular-component',
  templateUrl: './register-formular-component.component.html',
  styleUrls: ['./register-formular-component.component.css'],
})
export class RegisterFormularComponentComponent implements OnInit {
  surname: any;
  forename: any;
  email: any;
  password: any;

  constructor() {
    this.surname = '';
    this.forename = '';
    this.email = '';
    this.password = '';
  }

  ngOnInit() {}
}
