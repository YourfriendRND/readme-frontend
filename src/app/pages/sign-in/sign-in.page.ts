import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  imports: [LoginFormComponent, FooterComponent, HeaderComponent],
  selector: 'sign-in-page',
  standalone: true,
  templateUrl: './sign-in.template.html',
  styleUrls: ['./sign-in.styles.css'],
})
export class SignInPage {}

