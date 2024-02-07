import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {
  templateform = {
    name: '',
    email: '',
    phone: '',
    address: [{ street: '' }],
    password: '',
    passwordviewhide: '',


  }

  adressbutton() {
    this.templateform.address.push({ street: '' })
  }
  removebutton(index: any) {
    this.templateform.address.splice(index, 1);
  }
}
