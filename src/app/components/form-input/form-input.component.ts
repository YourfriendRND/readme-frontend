import { Component } from '@angular/core';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  selector: 'form-input',
  standalone: true,
  imports: [FormErrorComponent],
  templateUrl: './form-input.template.html',
  styleUrl: './form-input.styles.css'
})
export class FormInputComponent {

  public id: string = '';

  public formName: string = '';

  public type: string = '';

  public placeholder: string = '';

  public isRequired: boolean = false;

  public inputName: string = '';

  public value: unknown;

  public content: string = '';

}

