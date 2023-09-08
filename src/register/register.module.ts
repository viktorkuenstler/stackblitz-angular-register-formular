import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormularComponentComponent } from './../register-formular-component/register-formular-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [RegisterFormularComponentComponent],
  exports: [RegisterFormularComponentComponent],
})
export class RegisterModule {}
