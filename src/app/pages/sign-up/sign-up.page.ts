import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RegistrationFormComponent } from '../../components/registration-form/registration-form.component';

@Component({
  imports: [
    HeaderComponent,
    RegistrationFormComponent,
    FooterComponent
  ],
  selector: 'sign-up-page',
  templateUrl: './sign-up.template.html',
  styleUrls: ['./sign-up.styles.css'],
  standalone: true
})
export class SignUpPage {}
