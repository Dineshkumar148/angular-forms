import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  // showpassword = false;
  clientcreateform = new FormGroup({
    clientname: new FormControl('', [Validators.required]),
    clientemail: new FormControl('', [Validators.required, Validators.email]),
    phonenumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.pattern('[0-9,A-Z]*'), Validators.minLength(6)]),
    passwordviewhide: new FormControl(''),
    adress: new FormArray([
      new FormControl('adress 1')
    ])
  })

  getAdressFormArray() {
    return this.clientcreateform.get('adress') as FormArray;
  }
  adressAddControl() {
    this.getAdressFormArray().push(new FormControl('address'));
  }
  adressRemoveControl(index: number) {
    this.getAdressFormArray().removeAt(index);
  }
  clientsubmit() {
    if (this.clientcreateform.invalid) {
      console.log(this.clientcreateform.errors);
      window.alert('enter correct values')
    }
    console.log(this.clientcreateform.valid);
    console.log(this.clientcreateform.value);
  }
  // constructor() {
  //   this.clientcreateform.controls.passwordviewhide.valueChanges.subscribe((value) => {
  //     console.log(value);
  //     this.showpassword = value ==='show';

  //   }

  //   )
  // }

}
