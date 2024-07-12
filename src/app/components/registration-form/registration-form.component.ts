import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormErrorComponent } from '../form-error/form-error.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { InputField } from '../../shared/types';

@Component({
  selector: 'registration-form',
  imports: [FormErrorComponent, FormInputComponent, NgFor],
  standalone: true,
  templateUrl: './registration-form.template.html',
  styleUrl: './registration-form.styles.css'
})
export class RegistrationFormComponent {
  public formName: string = 'registration';
  public registrationFields: InputField[] = [
    {
      id: 'registration-email',
      formName: this.formName,
      content: 'Электронная почта',
      type: 'email',
      isRequired: true,
      inputName: 'email',
      placeholder: 'Укажите эл.почту',
    },
    {
      id: 'registration-login',
      formName: this.formName,
      content: 'Логин',
      type:'text',
      isRequired: true,
      inputName: 'login',
      placeholder: 'Укажите логин',
    },
    {
      id: 'registration-password',
      formName: this.formName,
      content: 'Пароль',
      type: 'password',
      isRequired: true,
      inputName: 'password',
      placeholder: 'Придумайте пароль',
    },
    {
      id: 'registration-password-repeat',
      formName: this.formName,
      content: 'Повтор пароля',
      type: 'password',
      isRequired: true,
      inputName: 'password-repeat',
      placeholder: 'Повторите пароль',
    }
  ];
}
