import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  imports: [FooterComponent],
  standalone: true,
  selector: 'profile-page',
  templateUrl: './profile.template.html',
  styleUrls: ['./profile.styles.css'],
})
export class ProfilePage {}

