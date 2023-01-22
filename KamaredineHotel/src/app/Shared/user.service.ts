import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURIR = 'https://localhost:7041/api/Auth/register';
  readonly BaseURIL = 'https://localhost:7041/api/Auth/token';
  readonly BaseURIP = 'https://localhost:7274/api/UserProfail';
  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''] });
    Passwords= this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    
    }, { validator: this.comparePasswords });

  
  
  get f() {
    return this.formModel.controls;
  }
  get p() {
    return this.Passwords.controls;
  }

  comparePasswords(fb: FormGroup |any) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }
  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.Passwords.value.Password
    };
    return this.http.post(this.BaseURIR, body);
  }
  login(formData :any) {
    return this.http.post(this.BaseURIL , formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURIP );
  }
 
}
