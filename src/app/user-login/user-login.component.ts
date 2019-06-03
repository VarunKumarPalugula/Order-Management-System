import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { userLogin } from './login.model';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginDetails: any;
  InvalidUser = true;
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../assets/login-details.json').subscribe((data: userLogin) => {
      this.loginDetails = data;
    });
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remindMe: null
    });
  }

  get input(): any {
    return this.loginForm.controls;
  }

  checkUser(): void {
    const userdetails = JSON.parse(localStorage.getItem('userdetails'));
    if (this.loginForm.value['username'] === userdetails['username']) {
      this.loginForm.patchValue({
        password: userdetails['password']
      });
    }
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    for (let a = 0; a < this.loginDetails.length; a++) {
      console.log(this.loginDetails, this.loginForm.value);
      if (this.loginDetails[a]['username'] === this.loginForm.value['username']
        && this.loginDetails[a]['password'] === this.loginForm.value['password']) {
        if (this.loginForm.value['remindMe']) {
          localStorage.setItem('userdetails', JSON.stringify(this.loginForm.value));
        }
        this.router.navigateByUrl('/order');
      } else {
        this.InvalidUser = false;
      }
    }
  }
}
