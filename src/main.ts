import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RegisterFormularComponentComponent } from './register-formular-component/register-formular-component.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<app-register-formular-component></app-register-formular-component>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
