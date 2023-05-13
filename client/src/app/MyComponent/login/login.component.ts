import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  registerformGroup!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.initForm();
    this.initRegisterForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  initRegisterForm() {
    this.registerformGroup = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  loginProcess() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(
        (result: any) => {
          alert(result.message);
          this.router.navigate(['/home']);
        },
        (err) => {
          alert(err.error.message);
        },
      );
    }
  }

  registerProcess() {
    console.log('point 0');
    if (this.registerformGroup.valid) {
      this.authService.register(this.registerformGroup.value).subscribe(
        (result: any) => alert(result.message),
        (err) => {
          alert(err.error.message);
        },
      );
    }
  }
}
