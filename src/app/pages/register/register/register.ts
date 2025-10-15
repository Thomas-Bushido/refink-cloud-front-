
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../../../utils/services/auth/register';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  register_form: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    emailAddress: new FormControl("", [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i)]),
    city: new FormControl("", [Validators.required]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    postalCode: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{5}$/)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    modules: new FormArray([new FormControl(""), new FormControl("")])
  });

  registeredFront: string = "";

  constructor(private register: RegisterService, private router: Router) {}

RegisterHandler() {
  const payload = {
    firstName: this.register_form.get('firstName')?.value,
    lastName: this.register_form.get('lastName')?.value,
    emailAddress: this.register_form.get('emailAddress')?.value,
    city: this.register_form.get('city')?.value,
    phoneNumber: Number(this.register_form.get('phoneNumber')?.value),
    postalCode: Number(this.register_form.get('postalCode')?.value),
    password: this.register_form.get('password')?.value
  };

console.log(payload)

  this.register.register(payload).subscribe({
    next: res => {
      console.log('Compte créé');
      this.registeredFront = "Compte créé";
      this.router.navigate(['/login']);
    },
    error: err => {
      console.error('Erreur de register:', err);
    }
  });
  
}
}












/*
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { RegisterService } from '../../../utils/services/auth/register';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
   @Input() alertFront : string = ""
  @Input() registeredFront : string = ""

registerData = { firstName: '', lastName: '', emailAddress: '', city: '', phoneNumber: '', postalCode: '', password: '' };

 constructor(private register: RegisterService, private router: Router) {}

  onRegisterHandler() {
    this.register.register(this.registerData)
      .subscribe({
        next: res => {
          console.log('Compte créé');
          console.log(this.registerData);
          //localStorage.setItem('token', res.token); 
          this.registeredFront = "Compte créé"
          this.router.navigate(['/login']);
        },
        error: err => {
          console.error('Erreur de login:', err);
        }
      });
  }
}
*/




