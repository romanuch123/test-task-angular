import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { MustMatch } from '../../../../shared/helpers/must-match.validator';
import { MustMatch } from 'src/app/shared/helpers/must-match.validator';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentPage: string = 'login';
  loginDataForm: FormGroup;
  registrationDataForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loginDataForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.registrationDataForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },                                        {
      validator: MustMatch('password', 'confirmPassword'),
    });
  }
  login(): void {
    if (this.loginDataForm.valid) {
      const { username, password } = this.loginDataForm.value;
      this.authService.login(username, password);
      this.router.navigate(['/']);
    } else {
      for (const prop in this.loginDataForm.controls) {
        if (this.loginDataForm.controls.hasOwnProperty(prop)) {
          this.loginDataForm.controls[prop].markAsTouched();
        }
      }
    }
  }
  registration(): void {
    if (this.registrationDataForm.valid) {
      const id: string = `f${(+new Date).toString(16)}`;
      const user: IUser = {
        id,
        firstName: this.registrationDataForm.value.firstName,
        lastName: this.registrationDataForm.value.lastName,
        username: this.registrationDataForm.value.username,
        password: this.registrationDataForm.value.password,
        tasks: [],
      };
      this.userService.createUser(user);
      this.authService.login(user.username, user.password);
      this.router.navigate(['/']);
    } else {
      for (const prop in this.registrationDataForm.controls) {
        if (this.registrationDataForm.controls.hasOwnProperty(prop)) {
          this.registrationDataForm.controls[prop].markAsTouched();
        }
      }
    }
  }

}
