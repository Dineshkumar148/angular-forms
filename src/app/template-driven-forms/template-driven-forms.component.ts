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
    name: 'dines',
  }

  // clientsubmit() {
  //   if (this.templateform.invalid) {
  //     console.log(this.templateform.errors);
  //     window.alert('enter correct values')
  //   }
  //   console.log(this.templateform.valid);
  //   console.log(this.templateform.value);
  // }
}
