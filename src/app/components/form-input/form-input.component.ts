import { Component, Input } from '@angular/core';
import { FormErrorComponent } from '../form-error/form-error.component';
import { InputField } from '../../shared/types';

@Component({
  selector: 'form-input',
  standalone: true,
  imports: [FormErrorComponent],
  templateUrl: './form-input.template.html',
  styleUrl: './form-input.styles.css'
})
export class FormInputComponent {

  @Input()
  public field: InputField | null = null;

  @Input()
  public id: string = '';

  @Input()
  public formName: string = '';

  @Input()
  public type: string = '';

  @Input()
  public placeholder: string = '';

  @Input()
  public isRequired: boolean = false;

  @Input()
  public inputName: string = '';

  @Input()
  public value: unknown;

  @Input()
  public content: string = '';

}

