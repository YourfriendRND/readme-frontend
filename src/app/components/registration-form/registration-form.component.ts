import { Component } from '@angular/core';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  selector: 'registration-form',
  imports: [FormErrorComponent],
  standalone: true,
  templateUrl: './registration-form.template.html',
  styleUrl: './registration-form.styles.css'
})
export class RegistrationFormComponent { }
