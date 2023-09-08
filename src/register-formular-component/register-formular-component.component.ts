import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register-formular-component',
  templateUrl: './register-formular-component.component.html',
  styleUrls: ['./register-formular-component.component.css'],
})
export class RegisterFormularComponentComponent implements OnInit {
  name: string;
  vorname: string;
  email: string;
  password: string;

  constructor() {
    this.name = '';
    this.vorname = '';
    this.email = '';
    this.password = '';
  }

  ngOnInit() {}
}
