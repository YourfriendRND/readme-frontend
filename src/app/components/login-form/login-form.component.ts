import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormErrorComponent } from '../form-error/form-error.component';
import { InputField } from '../../shared/types';

type AuthUser = {
  email: string;
  password: string;
}

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [FormErrorComponent, FormInputComponent, NgFor],
  templateUrl: './login-form.template.html',
  styleUrl: './login-form.styles.css'
})
export class LoginFormComponent {
  public formName: string = 'login';

  public loginFields : InputField[] = [
    {
      id:'login-email',
      formName: this.formName,
      content: 'Электронная почта',
      type: 'email',
      isRequired: true,
      inputName: 'email',
      placeholder: 'Укажите эл.почту'
    },
    {
      id: 'login-password',
      formName: this.formName,
      content: 'Пароль',
      type: 'password',
      isRequired: true,
      inputName: 'password',
      placeholder: 'Введите пароль',
    }
  ]

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
