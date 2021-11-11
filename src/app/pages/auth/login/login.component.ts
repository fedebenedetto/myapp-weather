import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading:boolean = false;
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  });
  constructor(public authService: AuthService, public route: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.loading = true;
      const isLogin= this.authService.login(this.form.value);
      if (isLogin) {
        localStorage.setItem('isauth','true');
        this.route.navigate(['/pages']);
      } else {
        
      }
    }
  }
}
