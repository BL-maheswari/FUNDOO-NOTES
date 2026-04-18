import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/userService/user-service';
import { log } from 'console';



@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // ✅ ADD THIS
  templateUrl: './registration.html',
  styleUrls: ['./registration.css']
})



export class Registration {   // ✅ correct name

  registerForm: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder, private router: Router,private userService: UserService ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      service : 'advance'
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
  if (this.registerForm.invalid) return;

  const payload = this.registerForm.value;

    console.log("form value " + this.registerForm.value)

  console.log("payload " + payload)

  this.userService.register(payload).subscribe({
  
    next: (res) => {
      console.log('REGISTER SUCCESS 👉', res);

      // ✅ Navigate to login
      this.router.navigate(['/login']);
    },
    error: (err) => {
      console.error('REGISTER ERROR 👉', err);
    }
  });
}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}