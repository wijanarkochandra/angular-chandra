import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { emailPatternValidator } from '@shared/utils/validator_pattern';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '@shared/ui/input-text/input-text.component';
import { AuthService } from '@api/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputTextComponent],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.form = this.fb.group({
      phone: ['', [Validators.required]],
      // email: ['', [Validators.required, emailPatternValidator()]], --- IGNORE ---
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Form Data:', formData);
    }

    this.authService
      .post_login({
        phone: this.form.value.phone,
        password: this.form.value.password,
      })
      .then((res) => {
        // console.log('Login Response:', res);
        this.router.navigateByUrl('/');
      })
      // .catch((error) => {
      //   console.error('Login Error:', error);
      // });
  }
}
