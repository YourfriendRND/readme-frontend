import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  imports: [ HeaderComponent, FooterComponent ],
  selector: 'app-main-page',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.css'],
  standalone: true,
})
export class MainPage {}
