import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  registerformGroup!: FormGroup;

  constructor(private authService: AuthService) {}

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
      this.authService.login(this.formGroup.value).subscribe((result: any) => {
        if (result) {
          alert(result.message);
        } else {
          alert('No such user found');
        }
      });
    }
  }

  registerProcess() {
    console.log('point 0');
    if (this.registerformGroup.valid) {
      this.authService
        .register(this.registerformGroup.value)
        .subscribe((result: any) => {
          console.log('point 1');
        });
    }
  }
}
