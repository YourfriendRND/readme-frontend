import { Component } from '@angular/core';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [FormErrorComponent],
  templateUrl: './login-form.template.html',
  styleUrl: './login-form.styles.css'
})
export class LoginFormComponent {

}
