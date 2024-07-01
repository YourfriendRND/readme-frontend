import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  selector: 'sign-up-page',
  templateUrl: './sign-up.template.html',
  styleUrls: ['./sign-up.styles.css'],
  standalone: true
})
export class SignUpPage {}
