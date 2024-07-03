import { Component } from '@angular/core';
import { FormErrorComponent } from '../form-error/form-error.component';

type AuthUser = {
  email: string;
  password: string;
}

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [FormErrorComponent],
  templateUrl: './login-form.template.html',
  styleUrl: './login-form.styles.css'
})
export class LoginFormComponent {
  public email: string = '';

  public password: string = '';

  public inputEmail(email: string): void {
    this.email = email;
  }

  public inputPassword(password: string): void {
    this.password = password;
  }

  public submitForm($event: Event): AuthUser {
    $event.preventDefault();
    
    return {
      email: this.email,
      password: this.password,
    };
  }

}
