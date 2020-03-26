import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
      password: ['', Validators.required],
      repeatedPassword: ['', Validators.required],
    });
  }

}
