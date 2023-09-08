import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RegisterModule } from './register/register.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RegisterModule],
  template: `<app-register-formular-component></app-register-formular-component>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
