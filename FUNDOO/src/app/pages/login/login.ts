import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/userService/user-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,  private userService: UserService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //   }
  // }

  onSubmit() {
    // debugger
  console.log('LOGIN CLICKED'); //  debug

  // if (this.loginForm.invalid) return;



  const payload = this.loginForm.value;


  

  this.userService.login(payload).subscribe({
    next: (res: any) => {
    console.log(payload, res);

      localStorage.setItem("token", res?.id);
      // console.log('SUCCESS', res);
    },
    error: () => {
      console.error('ERROR');
    }
  });
}

  goToRegistration() {
    this.router.navigate(['/signup']);
  }
}
