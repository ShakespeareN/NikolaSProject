import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  isValid: boolean = true;

  constructor(private router: Router) {}

  login() {
    if (
      this.loginForm.value.username.toLowerCase() === 'test' &&
      this.loginForm.value.password.toLowerCase() === 'test123'
    ) {
      this.isValid = true;
      this.router.navigate(['/', 'home']);
    } else {
      this.isValid = false;
    }
  }
}
