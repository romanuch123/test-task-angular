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
  isUserExist: boolean = false;
  emailOfExistUser: string = '';
  isAuthSuccess: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loginDataForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.registrationDataForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },                                        {
      validator: MustMatch('password', 'confirmPassword'),
    });
  }
  login(): void {
    if (this.loginDataForm.valid) {
      const { email, password } = this.loginDataForm.value;
      this.authService.login(email, password).subscribe((data) => {
        if (data) {
          this.isAuthSuccess = true;
          this.router.navigate(['/']);
        } else {
          this.isAuthSuccess = false;
        }
      });
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
        email: this.registrationDataForm.value.email,
        password: this.registrationDataForm.value.password,
        completedTasks: [],
        uncompletedTasks: [],
      };
      this.authService.registration(user).subscribe((isUserExist) => {
        this.isUserExist = isUserExist;
        if (isUserExist) {
          this.emailOfExistUser = this.registrationDataForm.value.email;
        } else {
          this.router.navigate(['/']);
        }
      });
    } else {
      for (const prop in this.registrationDataForm.controls) {
        if (this.registrationDataForm.controls.hasOwnProperty(prop)) {
          this.registrationDataForm.controls[prop].markAsTouched();
        }
      }
    }
  }

}
